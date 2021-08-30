import { mount } from '@vue/test-utils';
import VsLoader from '../src/vs-loader.vue';

describe('VsLoader', () => {
  it('Check pulse loader', () => {
    const wrapper = mount(VsLoader, {
      propsData: {
        variant: 'Pulse',
        color: '#1f73b7',
        size: '10px',
      },
    });
    expect(wrapper.vm.$options.name).toMatch('VsLoader');
    expect(wrapper.classes()).toContain('vs-pulse');
    expect(wrapper.props().color).toBe('#1f73b7');
    expect(wrapper.vm.$props.size).toBe('10px');
  });

  it('Check dots loader', () => {
    const wrapper = mount(VsLoader, {
      propsData: {
        variant: 'dots',
        color: 'brown',
        size: '30px',
      },
    });
    expect(wrapper.vm.$options.name).toMatch('VsLoader');
    expect(wrapper.classes()).toContain('vs-dots');
    expect(wrapper.props().color).toBe('brown');
    expect(wrapper.vm.$props.size).toBe('30px');
    expect(wrapper.attributes('class')).toBe('vs-dots');
    const svg = wrapper.find('svg');
    expect(svg.exists()).toBe(true);
    expect(svg.attributes('font-size')).toBe('30px');
    expect(svg.attributes('color')).toBe('brown');
  });
});
