import { describe, it, expect } from 'vitest';
import { h } from 'vue';
import { mount } from '@vue/test-utils';
import VsStepper from '../src/vs-stepper.vue';
import VsStepperDefault, { plugin } from '../src/index.js';

const steps = [{ label: 'Account' }, { label: 'Address' }, { label: 'Review' }];

const mountStepper = (props = {}, options = {}) => mount(VsStepper, { props: { steps, ...props }, ...options });

const itemStates = wrapper => wrapper.findAll('.vs-stepper__step').map(item => item.classes().find(c => c.startsWith('vs-stepper__step--')));

describe('VsStepper', () => {
  describe('rendering', () => {
    it('renders an ordered list with one item per step', () => {
      const wrapper = mountStepper();
      expect(wrapper.element.tagName).toBe('OL');
      expect(wrapper.findAll('li.vs-stepper__step')).toHaveLength(3);
      expect(wrapper.findAll('.vs-stepper__label').map(el => el.text())).toEqual(['Account', 'Address', 'Review']);
    });

    it('defaults to a vertical orientation and "Progress" aria-label', () => {
      const wrapper = mountStepper();
      expect(wrapper.classes()).toContain('vs-stepper--vertical');
      expect(wrapper.attributes('aria-label')).toBe('Progress');
    });

    it('applies the horizontal orientation class and custom aria-label', () => {
      const wrapper = mountStepper({ orientation: 'horizontal', ariaLabel: 'Checkout progress' });
      expect(wrapper.classes()).toContain('vs-stepper--horizontal');
      expect(wrapper.attributes('aria-label')).toBe('Checkout progress');
    });

    it('renders an empty list when no steps are provided', () => {
      const wrapper = mountStepper({ steps: [] });
      expect(wrapper.findAll('li')).toHaveLength(0);
    });
  });

  describe('step states', () => {
    it('marks steps before the active index as complete, the active one as current, and the rest as upcoming', () => {
      const wrapper = mountStepper({ activeIndex: 1 });
      expect(itemStates(wrapper)).toEqual(['vs-stepper__step--complete', 'vs-stepper__step--current', 'vs-stepper__step--upcoming']);
    });

    it('defaults activeIndex to the first step', () => {
      const wrapper = mountStepper();
      expect(itemStates(wrapper)).toEqual(['vs-stepper__step--current', 'vs-stepper__step--upcoming', 'vs-stepper__step--upcoming']);
    });

    it('marks every step as complete when activeIndex is past the last step', () => {
      const wrapper = mountStepper({ activeIndex: steps.length });
      expect(itemStates(wrapper)).toEqual(['vs-stepper__step--complete', 'vs-stepper__step--complete', 'vs-stepper__step--complete']);
    });

    it('updates states when activeIndex changes', async () => {
      const wrapper = mountStepper({ activeIndex: 0 });
      await wrapper.setProps({ activeIndex: 2 });
      expect(itemStates(wrapper)).toEqual(['vs-stepper__step--complete', 'vs-stepper__step--complete', 'vs-stepper__step--current']);
    });
  });

  describe('indicators', () => {
    it('shows the step number for non-complete steps and a check icon for completed steps', () => {
      const wrapper = mountStepper({ activeIndex: 1 });
      const indicators = wrapper.findAll('.vs-stepper__indicator');

      expect(indicators[0].find('.vs-stepper__check').exists()).toBe(true);
      expect(indicators[0].text()).toBe('');
      expect(indicators[1].text()).toBe('2');
      expect(indicators[2].text()).toBe('3');
    });

    it('replaces the default indicator with the indicator slot and passes step context', () => {
      const wrapper = mountStepper(
        { activeIndex: 1 },
        {
          slots: {
            indicator: props => h('span', { class: 'custom-icon' }, `${props.state}-${props.index}`),
          },
        }
      );
      const icons = wrapper.findAll('.custom-icon').map(el => el.text());
      expect(icons).toEqual(['complete-0', 'current-1', 'upcoming-2']);
      expect(wrapper.find('.vs-stepper__check').exists()).toBe(false);
    });

    it('renders the content slot only for the current step, with an animated wrapper', () => {
      const wrapper = mountStepper(
        { activeIndex: 1 },
        {
          slots: {
            content: props => h('p', { class: 'step-content' }, `Content ${props.index}`),
          },
        }
      );
      expect(wrapper.findAll('.vs-stepper__content')).toHaveLength(1);
      expect(wrapper.findAll('.step-content').map(el => el.text())).toEqual(['Content 1']);
    });

    it('does not render a content container without a content slot', () => {
      const wrapper = mountStepper();
      expect(wrapper.find('.vs-stepper__content').exists()).toBe(false);
    });

    it('hides indicators from assistive technology', () => {
      const wrapper = mountStepper();
      wrapper.findAll('.vs-stepper__indicator').forEach(indicator => {
        expect(indicator.attributes('aria-hidden')).toBe('true');
      });
    });
  });

  describe('accessibility', () => {
    it('sets aria-current="step" only on the current step', () => {
      const wrapper = mountStepper({ activeIndex: 1 });
      const items = wrapper.findAll('li');
      expect(items[0].attributes('aria-current')).toBeUndefined();
      expect(items[1].attributes('aria-current')).toBe('step');
      expect(items[2].attributes('aria-current')).toBeUndefined();
    });

    it('provides screen reader text with the position and completion status', () => {
      const wrapper = mountStepper({ activeIndex: 1 });
      const srText = wrapper.findAll('.vs-stepper__sr-only').map(el => el.text().replace(/\s+/g, ' '));
      expect(srText).toEqual(['Step 1 of 3, completed', 'Step 2 of 3', 'Step 3 of 3']);
    });
  });

  it('exposes a Vue plugin that registers VsStepper globally', () => {
    const registered = {};
    plugin.install({ component: (name, component) => (registered[name] = component) });
    expect(registered.VsStepper).toBe(VsStepper);
    expect(VsStepperDefault).toBe(VsStepper);
  });
});
