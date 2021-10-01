import { shallowMount } from '@vue/test-utils';
import VsToast from '../src/vs-toast.vue';

describe('VsToast', () => {
  it('Check toast default', () => {
    const defaultToastText = 'Toast Message';
    const wrapper = shallowMount(VsToast, {
      propsData: {
        variant: 'success',
      },
      slots: {
        default: defaultToastText,
      },
    });
    expect(wrapper.find('div').exists()).toBe(true);
    expect(wrapper.text()).toMatch(defaultToastText);
    const mainWraper = wrapper.find('.vs-toast');
    expect(mainWraper.classes()).toContain('vs-toast--success');
    expect(mainWraper.classes()).toContain('vs-toast--top-center');
    const icon = wrapper.find('.vs-toast-icon');
    expect(icon.classes()).toContain('vs-toast-icon');
  });

  it('Check toast error', () => {
    const defaultToastText = 'Error Message';
    const wrapper = shallowMount(VsToast, {
      propsData: {
        variant: 'error',
        position: 'top-right',
        showClose: false,
      },
      slots: {
        default: defaultToastText,
      },
    });
    expect(wrapper.find('div').exists()).toBe(true);
    expect(wrapper.text()).toMatch(defaultToastText);
    const mainWraper = wrapper.find('.vs-toast');
    expect(mainWraper.classes()).toContain('vs-toast--error');
    expect(mainWraper.classes()).toContain('vs-toast--top-right');
  });
});
