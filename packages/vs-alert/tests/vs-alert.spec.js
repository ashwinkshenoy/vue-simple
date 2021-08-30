import { shallowMount } from '@vue/test-utils';
import VsAlert from '../src/vs-alert.vue';

describe('VsAlert', () => {
  it('Check default alert structure/class', () => {
    const defaultAlertHeading = 'Success Title';
    const defaultAlertText = 'Success Message';
    const wrapper = shallowMount(VsAlert, {
      propsData: {
        variant: 'success',
        title: defaultAlertHeading,
      },
      slots: {
        default: defaultAlertText,
      },
    });
    expect(wrapper.classes()).toContain('vs-alert');
    expect(wrapper.classes()).toContain('vs-alert-success');
    expect(wrapper.text()).toMatch(defaultAlertHeading);
    expect(wrapper.text()).toMatch(defaultAlertText);
    expect(wrapper.props().title).toBe(defaultAlertHeading);
    expect(wrapper.find('button').exists()).toBe(false);
  });

  it('Check default alert with close', () => {
    const defaultAlertHeading = 'Success Title';
    const defaultAlertText = 'Success Message';
    const wrapper = shallowMount(VsAlert, {
      propsData: {
        variant: 'success',
        title: defaultAlertHeading,
        showClose: true,
      },
      slots: {
        default: defaultAlertText,
      },
    });
    expect(wrapper.classes()).toContain('vs-alert');
    expect(wrapper.classes()).toContain('vs-alert-success');
    expect(wrapper.text()).toMatch(defaultAlertHeading);
    expect(wrapper.text()).toMatch(defaultAlertText);
    expect(wrapper.props().title).toBe(defaultAlertHeading);
    expect(wrapper.find('button').exists()).toBe(true);
    const closebutton = wrapper.find('button');
    closebutton.trigger('click');
    expect(wrapper.emitted('close')).toHaveLength(1);
  });

  it('Check small alert with close', () => {
    const defaultAlertHeading = 'Success Title';
    const defaultAlertText = 'Success Message';
    const wrapper = shallowMount(VsAlert, {
      propsData: {
        variant: 'success',
        title: defaultAlertHeading,
        showClose: true,
        small: true,
      },
      slots: {
        default: defaultAlertText,
      },
    });
    expect(wrapper.classes()).toContain('vs-alert');
    expect(wrapper.classes()).toContain('vs-alert-success');
    expect(wrapper.classes()).toContain('vs-alert--small');
    expect(wrapper.text()).toMatch(defaultAlertHeading);
    expect(wrapper.text()).toMatch(defaultAlertText);
    expect(wrapper.props().title).toBe(defaultAlertHeading);
    expect(wrapper.find('button').exists()).toBe(true);
    const closebutton = wrapper.find('button');
    closebutton.trigger('click');
    expect(wrapper.emitted('close')).toHaveLength(1);
  });

  it('Check noBg alert without close', () => {
    const defaultAlertHeading = 'Success Title';
    const defaultAlertText = 'Success Message';
    const wrapper = shallowMount(VsAlert, {
      propsData: {
        variant: 'success',
        title: defaultAlertHeading,
        noBg: true,
      },
      slots: {
        default: defaultAlertText,
      },
    });
    expect(wrapper.classes()).toContain('vs-alert');
    expect(wrapper.classes()).toContain('vs-alert-success');
    expect(wrapper.classes()).toContain('vs-alert--no-bg');
    expect(wrapper.text()).toMatch(defaultAlertHeading);
    expect(wrapper.text()).toMatch(defaultAlertText);
    expect(wrapper.props().title).toBe(defaultAlertHeading);
    expect(wrapper.find('button').exists()).toBe(false);
  });
});
