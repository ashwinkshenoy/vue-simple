import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { h } from 'vue';
import { mount, flushPromises } from '@vue/test-utils';
import VsSpotlight from '../src/vs-spotlight.vue';

const commands = [
  { id: 'new', label: 'New file', group: 'File', shortcut: 'Ctrl+N', run: vi.fn() },
  { id: 'open', label: 'Open file', group: 'File', keywords: ['load'], run: vi.fn() },
  { id: 'theme', label: 'Toggle theme', group: 'View', run: vi.fn() },
  { id: 'off', label: 'Disabled thing', disabled: true, run: vi.fn() },
];

const mountPalette = (props = {}) =>
  mount(VsSpotlight, {
    props: { open: true, commands, ...props },
    attachTo: document.body,
    global: { stubs: { teleport: true } },
  });

const optionLabels = wrapper => wrapper.findAll('[role="option"] .vs-spotlight__label').map(el => el.text());
const activeLabel = wrapper => wrapper.find('.vs-spotlight__option--active .vs-spotlight__label').text();
const keydown = (wrapper, key, init = {}) => wrapper.find('.vs-spotlight').trigger('keydown', { key, ...init });

describe('VsSpotlight', () => {
  let wrapper;

  afterEach(() => {
    wrapper?.unmount();
    wrapper = null;
    document.body.innerHTML = '';
  });

  describe('visibility', () => {
    it('renders a search icon inside the input', () => {
      wrapper = mountPalette();
      expect(wrapper.find('.vs-spotlight__search .vs-spotlight__search-icon').exists()).toBe(true);
    });

    it('renders a command icon component before its label', () => {
      const Icon = { render: () => h('svg') };
      wrapper = mountPalette({ commands: [{ id: 'icon', label: 'With icon', icon: Icon, run: vi.fn() }] });
      expect(wrapper.find('.vs-spotlight__icon').exists()).toBe(true);
    });

    it('renders an image when the icon is a URL string', () => {
      wrapper = mountPalette({
        commands: [{ id: 'url', label: 'From URL', icon: '/icons/file.svg', run: vi.fn() }],
      });
      const img = wrapper.find('img.vs-spotlight__icon');
      expect(img.exists()).toBe(true);
      expect(img.attributes('src')).toBe('/icons/file.svg');
    });

    it('omits the icon element when a command has no icon', () => {
      wrapper = mountPalette();
      expect(wrapper.find('.vs-spotlight__icon').exists()).toBe(false);
    });

    it('renders nothing when closed', () => {
      wrapper = mountPalette({ open: false });
      expect(wrapper.find('.vs-spotlight').exists()).toBe(false);
    });

    it('renders the dialog when open', () => {
      wrapper = mountPalette();
      expect(wrapper.find('[role="dialog"]').exists()).toBe(true);
      expect(optionLabels(wrapper)).toHaveLength(commands.length);
    });

    it('emits update:open false on Escape', async () => {
      wrapper = mountPalette();
      await keydown(wrapper, 'Escape');
      expect(wrapper.emitted('update:open')).toEqual([[false]]);
    });

    it('emits update:open false on backdrop click', async () => {
      wrapper = mountPalette();
      await wrapper.find('.vs-spotlight__overlay').trigger('click');
      expect(wrapper.emitted('update:open')).toEqual([[false]]);
    });

    it('does not close when clicking inside the dialog', async () => {
      wrapper = mountPalette();
      await wrapper.find('.vs-spotlight').trigger('click');
      expect(wrapper.emitted('update:open')).toBeUndefined();
    });
  });

  describe('filtering and grouping', () => {
    it('filters options by query and emits search', async () => {
      wrapper = mountPalette();
      await wrapper.find('input').setValue('file');
      expect(optionLabels(wrapper)).toEqual(['New file', 'Open file']);
      expect(wrapper.emitted('search').at(-1)).toEqual(['file']);
    });

    it('matches keywords', async () => {
      wrapper = mountPalette();
      await wrapper.find('input').setValue('load');
      expect(optionLabels(wrapper)).toEqual(['Open file']);
    });

    it('shows the empty state when nothing matches', async () => {
      wrapper = mountPalette();
      await wrapper.find('input').setValue('zzzz');
      expect(wrapper.find('.vs-spotlight__empty').text()).toBe('No matching commands');
      expect(optionLabels(wrapper)).toEqual([]);
    });

    it('renders group labels and groups in first-appearance order', () => {
      wrapper = mountPalette();
      const labels = wrapper.findAll('.vs-spotlight__group-label').map(el => el.text());
      expect(labels).toEqual(['File', 'View']);
    });

    it('caps results at maxResults', () => {
      wrapper = mountPalette({ maxResults: 2 });
      expect(optionLabels(wrapper)).toHaveLength(2);
    });
  });

  describe('keyboard navigation', () => {
    it('moves the active option with ArrowDown and wraps around', async () => {
      wrapper = mountPalette();
      const active = () => activeLabel(wrapper);
      expect(active()).toBe('New file');
      await keydown(wrapper, 'ArrowDown');
      expect(active()).toBe('Open file');
      await keydown(wrapper, 'ArrowDown');
      await keydown(wrapper, 'ArrowDown');
      await keydown(wrapper, 'ArrowDown');
      expect(active()).toBe('New file');
    });

    it('wraps ArrowUp from the first option to the last', async () => {
      wrapper = mountPalette();
      await keydown(wrapper, 'ArrowUp');
      expect(activeLabel(wrapper)).toBe('Disabled thing');
    });

    it('runs the active command and emits select on Enter', async () => {
      wrapper = mountPalette();
      await wrapper.find('input').trigger('keydown', { key: 'ArrowDown' });
      await wrapper.find('input').trigger('keydown', { key: 'Enter' });
      expect(commands[1].run).toHaveBeenCalledTimes(1);
      expect(wrapper.emitted('select')[0][0].id).toBe('open');
      expect(wrapper.emitted('update:open')).toEqual([[false]]);
    });

    it('does not run commands on Enter when focus is outside the input', async () => {
      wrapper = mountPalette();
      await wrapper.find('[role="listbox"]').trigger('keydown', { key: 'Enter' });
      expect(commands[0].run).not.toHaveBeenCalled();
    });

    it('focuses the search input when opened', async () => {
      wrapper = mountPalette({ open: false });
      await wrapper.setProps({ open: true });
      await flushPromises();
      expect(document.activeElement).toBe(wrapper.find('input').element);
    });
  });

  describe('selection', () => {
    it('runs the command on click and closes by default', async () => {
      wrapper = mountPalette();
      await wrapper.findAll('[role="option"]')[2].trigger('click');
      expect(commands[2].run).toHaveBeenCalledTimes(1);
      expect(wrapper.emitted('update:open')).toEqual([[false]]);
    });

    it('stays open when closeOnSelect is false', async () => {
      wrapper = mountPalette({ closeOnSelect: false });
      await wrapper.findAll('[role="option"]')[0].trigger('click');
      expect(commands[0].run).toHaveBeenCalled();
      expect(wrapper.emitted('update:open')).toBeUndefined();
    });

    it('does not run disabled commands', async () => {
      wrapper = mountPalette();
      const disabled = commands[3];
      await wrapper.findAll('[role="option"]')[3].trigger('click');
      expect(disabled.run).not.toHaveBeenCalled();
      expect(wrapper.emitted('select')).toBeUndefined();
    });

    it('marks disabled options with aria-disabled', () => {
      wrapper = mountPalette();
      expect(wrapper.findAll('[role="option"]')[3].attributes('aria-disabled')).toBe('true');
    });
  });

  describe('nested commands', () => {
    const nested = [
      {
        id: 'git',
        label: 'Git',
        children: [
          { id: 'commit', label: 'Commit', run: vi.fn() },
          { id: 'push', label: 'Push', run: vi.fn() },
        ],
      },
    ];

    it('drills into a command with children instead of running it', async () => {
      wrapper = mountPalette({ commands: nested });
      await wrapper.findAll('[role="option"]')[0].trigger('click');
      expect(optionLabels(wrapper)).toEqual(['Commit', 'Push']);
      expect(wrapper.find('.vs-spotlight__crumbs').text()).toBe('Git');
      expect(wrapper.emitted('update:open')).toBeUndefined();
    });

    it('goes back on Backspace with an empty query', async () => {
      wrapper = mountPalette({ commands: nested });
      await wrapper.findAll('[role="option"]')[0].trigger('click');
      await wrapper.find('input').trigger('keydown', { key: 'Backspace' });
      expect(optionLabels(wrapper)).toEqual(['Git']);
    });

    it('goes back when the Back button is clicked', async () => {
      wrapper = mountPalette({ commands: nested });
      await wrapper.findAll('[role="option"]')[0].trigger('click');
      await wrapper.find('.vs-spotlight__back').trigger('click');
      expect(optionLabels(wrapper)).toEqual(['Git']);
      expect(wrapper.find('.vs-spotlight__back').exists()).toBe(false);
    });

    it('does not go back on Backspace while the query has text', async () => {
      wrapper = mountPalette({ commands: nested });
      await wrapper.findAll('[role="option"]')[0].trigger('click');
      await wrapper.find('input').setValue('c');
      await wrapper.find('input').trigger('keydown', { key: 'Backspace' });
      expect(wrapper.find('.vs-spotlight__crumbs').text()).toBe('Git');
    });

    it('closes the whole palette on Escape while nested', async () => {
      wrapper = mountPalette({ commands: nested });
      await wrapper.findAll('[role="option"]')[0].trigger('click');
      await keydown(wrapper, 'Escape');
      expect(wrapper.emitted('update:open')).toEqual([[false]]);
    });
  });

  describe('accessibility', () => {
    it('wires the combobox to the listbox and active option', async () => {
      wrapper = mountPalette();
      const input = wrapper.find('input');
      const listbox = wrapper.find('[role="listbox"]');
      expect(input.attributes('role')).toBe('combobox');
      expect(input.attributes('aria-controls')).toBe(listbox.attributes('id'));
      expect(input.attributes('aria-expanded')).toBe('true');
      expect(input.attributes('aria-activedescendant')).toBe(
        wrapper.find('.vs-spotlight__option--active').attributes('id'),
      );
    });

    it('marks exactly one option as selected', () => {
      wrapper = mountPalette();
      const selected = wrapper.findAll('[aria-selected="true"]');
      expect(selected).toHaveLength(1);
    });

    it('announces the result count in a live region', async () => {
      wrapper = mountPalette();
      await wrapper.find('input').setValue('file');
      expect(wrapper.find('[aria-live="polite"]').text()).toBe('2 results');
    });
  });

  describe('global shortcut', () => {
    const press = (key, init = {}) => window.dispatchEvent(new KeyboardEvent('keydown', { key, ...init }));

    it('toggles on Ctrl+K', () => {
      wrapper = mountPalette({ open: false });
      press('k', { ctrlKey: true });
      expect(wrapper.emitted('update:open')).toEqual([[true]]);
    });

    it('toggles on Cmd+K', () => {
      wrapper = mountPalette({ open: true });
      press('k', { metaKey: true });
      expect(wrapper.emitted('update:open')).toEqual([[false]]);
    });

    it('ignores plain k without a modifier', () => {
      wrapper = mountPalette({ open: false });
      press('k');
      expect(wrapper.emitted('update:open')).toBeUndefined();
    });

    it('does nothing when shortcut is empty', () => {
      wrapper = mountPalette({ open: false, shortcut: '' });
      press('k', { ctrlKey: true });
      expect(wrapper.emitted('update:open')).toBeUndefined();
    });

    it('stops listening after unmount', () => {
      wrapper = mountPalette({ open: false });
      wrapper.unmount();
      press('k', { ctrlKey: true });
      expect(wrapper.emitted('update:open')).toBeUndefined();
      wrapper = null;
    });
  });

  describe('focus management', () => {
    it('restores focus to the previously focused element on close', async () => {
      const trigger = document.createElement('button');
      document.body.appendChild(trigger);
      trigger.focus();

      wrapper = mountPalette({ open: false });
      await wrapper.setProps({ open: true });
      await flushPromises();
      expect(document.activeElement).toBe(wrapper.find('input').element);

      await wrapper.setProps({ open: false });
      await flushPromises();
      expect(document.activeElement).toBe(trigger);
    });
  });

  describe('header and footer', () => {
    it('renders the title and badge when provided', () => {
      wrapper = mountPalette({ title: 'Commands', badge: 'Beta' });
      expect(wrapper.find('.vs-spotlight__title').text()).toContain('Commands');
      expect(wrapper.find('.vs-spotlight__badge').text()).toBe('Beta');
    });

    it('omits the title row when neither title nor badge is set', () => {
      wrapper = mountPalette();
      expect(wrapper.find('.vs-spotlight__title').exists()).toBe(false);
    });

    it('shows the footer and key hints by default', () => {
      wrapper = mountPalette();
      expect(wrapper.find('.vs-spotlight__footer').exists()).toBe(true);
      expect(wrapper.findAll('.vs-spotlight__hints kbd').length).toBe(3);
    });

    it('hides the footer when showFooter is false', () => {
      wrapper = mountPalette({ showFooter: false });
      expect(wrapper.find('.vs-spotlight__footer').exists()).toBe(false);
    });

    it('exposes footer slot props for the active command', () => {
      wrapper = mount(VsSpotlight, {
        props: { open: true, commands },
        attachTo: document.body,
        global: { stubs: { teleport: true } },
        slots: {
          footer: props => h('span', { class: 'custom-footer' }, `${props.statusText}|${props.activeCommand.label}`),
        },
      });
      expect(wrapper.find('.custom-footer').text()).toContain('New file');
    });
  });

  describe('options', () => {
    it('renders the description under the label', () => {
      wrapper = mountPalette({
        commands: [{ id: 'd', label: 'Save', description: 'Write to disk', run: vi.fn() }],
      });
      expect(wrapper.find('.vs-spotlight__description').text()).toBe('Write to disk');
    });

    it('applies the uppercase modifier to group labels by default', () => {
      wrapper = mountPalette();
      expect(wrapper.find('.vs-spotlight__group-label--uppercase').exists()).toBe(true);
    });

    it('drops the uppercase modifier when uppercaseGroups is false', () => {
      wrapper = mountPalette({ uppercaseGroups: false });
      expect(wrapper.find('.vs-spotlight__group-label--uppercase').exists()).toBe(false);
    });

    it('moves to the first and last option with Home and End when the query is empty', async () => {
      wrapper = mountPalette();
      const input = wrapper.find('input');
      await input.trigger('keydown', { key: 'End' });
      expect(activeLabel(wrapper)).toBe(optionLabels(wrapper).at(-1));
      await input.trigger('keydown', { key: 'Home' });
      expect(activeLabel(wrapper)).toBe(optionLabels(wrapper)[0]);
    });
  });

  describe('teleport', () => {
    it('renders into document.body by default', async () => {
      wrapper = mount(VsSpotlight, {
        props: { open: true, commands },
        attachTo: document.body,
      });
      await flushPromises();
      expect(document.body.querySelector('.vs-spotlight')).not.toBeNull();
    });

    it('stays inside the component when teleport is false', async () => {
      wrapper = mount(VsSpotlight, {
        props: { open: true, commands, teleport: false },
        attachTo: document.body,
      });
      await flushPromises();
      expect(wrapper.find('.vs-spotlight').exists()).toBe(true);
    });
  });
});
