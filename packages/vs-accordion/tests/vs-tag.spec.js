import { shallowMount } from '@vue/test-utils';
import VsTag from '../src/vs-tag.vue';

describe('VsTag', () => {
  // it('Check default tag', () => {
  //   const defaultTagText = 'Orange';
  //   const wrapper = shallowMount(VsTag, {
  //     slots: {
  //       default: defaultTagText,
  //     },
  //   });
  //   expect(wrapper.find('span').exists()).toBe(true);
  //   expect(wrapper.classes()).toContain('vs-tag');
  //   expect(wrapper.classes()).toContain('vs-tag__size-medium');
  //   expect(wrapper.classes()).toContain('vs-tag--bold');
  //   expect(wrapper.text()).toMatch(defaultTagText);
  //   expect(wrapper.text()).not.toMatch('Orangee');
  // });
  // it('Check primary tag', () => {
  //   const wrapper = shallowMount(VsTag, {
  //     propsData: {
  //       variant: 'primary',
  //     },
  //   });
  //   expect(wrapper.find('span').exists()).toBe(true);
  //   expect(wrapper.classes()).toContain('vs-tag');
  //   expect(wrapper.classes()).toContain('vs-tag__primary');
  //   expect(wrapper.classes()).toContain('vs-tag__size-medium');
  //   expect(wrapper.classes()).toContain('vs-tag--bold');
  // });
  // it('Check pill tag', () => {
  //   const wrapper = shallowMount(VsTag, {
  //     propsData: {
  //       isPill: true,
  //     },
  //   });
  //   expect(wrapper.find('span').exists()).toBe(true);
  //   expect(wrapper.classes()).toContain('vs-tag');
  //   expect(wrapper.classes()).toContain('vs-tag__size-medium');
  //   expect(wrapper.classes()).toContain('vs-tag--bold');
  //   expect(wrapper.classes()).toContain('vs-tag--pill');
  //   expect(wrapper.classes()).not.toContain('vs-tag--round');
  // });
  // it('Check round tag', () => {
  //   const wrapper = shallowMount(VsTag, {
  //     propsData: {
  //       isRound: true,
  //     },
  //   });
  //   expect(wrapper.find('span').exists()).toBe(true);
  //   expect(wrapper.classes()).toContain('vs-tag');
  //   expect(wrapper.classes()).toContain('vs-tag__size-medium');
  //   expect(wrapper.classes()).toContain('vs-tag--bold');
  //   expect(wrapper.classes()).toContain('vs-tag--round');
  //   expect(wrapper.classes()).not.toContain('vs-tag--pill');
  // });
  // it('Check small tag', () => {
  //   const wrapper = shallowMount(VsTag, {
  //     propsData: {
  //       size: 'small',
  //     },
  //   });
  //   expect(wrapper.find('span').exists()).toBe(true);
  //   expect(wrapper.classes()).toContain('vs-tag');
  //   expect(wrapper.classes()).toContain('vs-tag__size-small');
  //   expect(wrapper.classes()).not.toContain('vs-tag__size-medium');
  //   expect(wrapper.classes()).not.toContain('vs-tag__size-large');
  //   expect(wrapper.classes()).toContain('vs-tag--bold');
  //   expect(wrapper.classes()).not.toContain('vs-tag--round');
  //   expect(wrapper.classes()).not.toContain('vs-tag--pill');
  // });
  // it('Check large tag', () => {
  //   const wrapper = shallowMount(VsTag, {
  //     propsData: {
  //       size: 'large',
  //     },
  //   });
  //   expect(wrapper.find('span').exists()).toBe(true);
  //   expect(wrapper.classes()).toContain('vs-tag');
  //   expect(wrapper.classes()).toContain('vs-tag__size-large');
  //   expect(wrapper.classes()).not.toContain('vs-tag__size-small');
  //   expect(wrapper.classes()).not.toContain('vs-tag__size-medium');
  //   expect(wrapper.classes()).toContain('vs-tag--bold');
  //   expect(wrapper.classes()).not.toContain('vs-tag--round');
  //   expect(wrapper.classes()).not.toContain('vs-tag--pill');
  // });
  // it('Check tag with close', () => {
  //   const wrapper = shallowMount(VsTag, {
  //     propsData: {
  //       variant: 'danger',
  //       isClose: true,
  //     },
  //   });
  //   const event = jest.fn();
  //   const button = wrapper.find('button');
  //   expect(wrapper.vm.$options.name).toMatch('VsTag');
  //   expect(button.classes()).toContain('vs-tag__button');
  //   expect(wrapper.vm.$on('click', event));
  //   expect(event).toHaveBeenCalledTimes(0);
  //   button.trigger('click');
  //   expect(event).toHaveBeenCalledTimes(1);
  //   expect(wrapper.find('span').exists()).toBe(true);
  //   expect(wrapper.classes()).toContain('vs-tag');
  //   expect(wrapper.classes()).toContain('vs-tag__danger');
  //   expect(wrapper.classes()).toContain('vs-tag__size-medium');
  //   expect(wrapper.classes()).toContain('vs-tag--bold');
  //   expect(wrapper.classes()).not.toContain('vs-tag--round');
  //   expect(wrapper.classes()).not.toContain('vs-tag--pill');
  // });
  // it('Check bg/text color', () => {
  //   const wrapper = shallowMount(VsTag, {
  //     propsData: {
  //       bgColor: 'red',
  //       textColor: 'white',
  //     },
  //   });
  //   expect(wrapper.props().bgColor).toBe('red');
  //   expect(wrapper.props().textColor).toBe('white');
  //   expect(wrapper.find('span').exists()).toBe(true);
  //   expect(wrapper.classes()).toContain('vs-tag');
  //   expect(wrapper.classes()).toContain('vs-tag__size-medium');
  //   expect(wrapper.classes()).toContain('vs-tag--bold');
  //   expect(wrapper.classes()).not.toContain('vs-tag--round');
  //   expect(wrapper.classes()).not.toContain('vs-tag--pill');
  // });
});
