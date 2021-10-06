import { mount } from '@vue/test-utils';
import VsLoader from '../src/vs-loader.vue';

describe('VsLoader', () => {
  it('Check pulse loader', () => {
    const wrapper = mount(VsLoader, {
      propsData: {
        variant: 'Pulse',
        color: '#1f73b7',
        size: 10,
      },
    });
    expect(wrapper.vm.$options.name).toMatch('VsLoader');
    expect(wrapper.classes()).toContain('vs-pulse');
    expect(wrapper.props().color).toBe('#1f73b7');
    expect(wrapper.vm.$props.size).toBe(10);
  });

  it('Check pulse loader has center aligned class', () => {
    const wrapper = mount(VsLoader, {
      propsData: {
        variant: 'Pulse',
        color: '#1f73b7',
        size: 10,
        center: true,
      },
    });
    expect(wrapper.vm.$options.name).toMatch('VsLoader');
    expect(wrapper.classes()).toContain('vs-pulse');
    expect(wrapper.classes()).toContain('vs-loader--center');
    expect(wrapper.props().color).toBe('#1f73b7');
    expect(wrapper.vm.$props.size).toBe(10);
  });

  it('Check dots loader', () => {
    const wrapper = mount(VsLoader, {
      propsData: {
        variant: 'dots',
        color: 'brown',
        size: 30,
      },
    });
    expect(wrapper.vm.$options.name).toMatch('VsLoader');
    expect(wrapper.classes()).toContain('vs-dots');
    expect(wrapper.props().color).toBe('brown');
    expect(wrapper.vm.$props.size).toBe(30);
    expect(wrapper.attributes('class')).toBe('vs-dots');
    const svg = wrapper.find('svg');
    expect(svg.exists()).toBe(true);
    expect(svg.attributes('font-size')).toBe('30');
    expect(svg.attributes('color')).toBe('brown');
  });
});
