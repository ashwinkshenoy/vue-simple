import { mount } from '@vue/test-utils';
import VsTooltip from '../src/vs-tooltip.vue';

function flush() {
  return new Promise(r => {
    setTimeout(r, 20);
  });
}

describe('VsTooltip', () => {
  it('exposes a stable tooltip id', () => {
    const wrapper = mount(VsTooltip, {
      props: { title: 'Help text' },
      slots: { default: '<button type="button">Action</button>' },
    });
    const id = wrapper.vm.tooltipId;
    expect(id).toMatch(/^vs-tooltip-\d+$/);
    expect(wrapper.find('.vs-tooltip__panel').exists()).toBe(false);
    wrapper.unmount();
  });

  it('adds role="tooltip" to the floating label when open', async () => {
    const wrapper = mount(VsTooltip, {
      props: { title: 'Described', openDelay: 0, closeDelay: 0 },
      slots: { default: '<button type="button">b</button>' },
      attachTo: document.body,
    });
    await wrapper.find('button').trigger('focus');
    await flush();
    const panel = document.getElementById(wrapper.vm.tooltipId);
    expect(panel).toBeTruthy();
    expect(panel.getAttribute('role')).toBe('tooltip');
    wrapper.unmount();
  });

  it('adds --no-arrow on the panel when hasArrow is false', async () => {
    const wrapper = mount(VsTooltip, {
      props: { title: 'No caret', hasArrow: false, openDelay: 0, closeDelay: 0 },
      slots: { default: '<button type="button">b</button>' },
      attachTo: document.body,
    });
    await wrapper.find('button').trigger('focus');
    await flush();
    const panel = document.getElementById(wrapper.vm.tooltipId);
    expect(panel.classList.contains('vs-tooltip__panel--no-arrow')).toBe(true);
    wrapper.unmount();
  });

  it('sets aria-describedby on the button when the tooltip is visible', async () => {
    const wrapper = mount(VsTooltip, {
      props: { title: 'Info', openDelay: 0, closeDelay: 0 },
      slots: { default: '<button type="button" class="t-btn">X</button>' },
      attachTo: document.body,
    });
    const btn = wrapper.get('.t-btn');
    await btn.trigger('focus');
    await flush();
    const id = wrapper.vm.tooltipId;
    expect(btn.element.getAttribute('aria-describedby')).toContain(id);
    await btn.trigger('blur');
    await flush();
    const desc = btn.element.getAttribute('aria-describedby');
    expect(!desc || !desc.includes(id)).toBe(true);
    wrapper.unmount();
  });
});
