import { mount } from '@vue/test-utils';
import VsButton from '../src/vs-button.vue';

describe('VsButton', () => {
  it('Check default button', () => {
    const defaultText = 'Submit';
    const wrapper = mount(VsButton, {
      propsData: {
        variant: 'primary',
      },
      slots: {
        default: defaultText,
      },
    });
    const event = jest.fn();
    const button = wrapper.find('button');
    expect(wrapper.vm.$options.name).toMatch('VsButton');
    expect(button.vm.$on('click', event));
    expect(event).toHaveBeenCalledTimes(0);
    button.trigger('click');
    expect(event).toHaveBeenCalledTimes(1);
    expect(wrapper.attributes('class')).toBe('vs-button vs-button__primary vs-button--medium');
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.text()).toMatch(defaultText);
  });

  it('Check fill button', () => {
    const wrapper = mount(VsButton, {
      propsData: {
        fill: true,
      },
    });
    expect(wrapper.attributes('class')).toBe('vs-button vs-button__primary-fill vs-button--medium');
  });

  it('Check round button', () => {
    const wrapper = mount(VsButton, {
      propsData: {
        isRound: true,
      },
    });
    expect(wrapper.classes()).toContain('vs-button--round');
  });

  it('Check disabled button', () => {
    const wrapper = mount(VsButton, {
      propsData: {
        disabled: true,
      },
    });
    const event = jest.fn();
    const button = wrapper.find('button');
    expect(wrapper.vm.$options.name).toMatch('VsButton');
    expect(button.vm.$on('click', event));
    expect(event).toHaveBeenCalledTimes(0);
    button.trigger('click');
    expect(event).toHaveBeenCalledTimes(0);
    expect(wrapper.attributes('disabled')).toBe('disabled');
  });

  it('Check danger button', () => {
    const wrapper = mount(VsButton, {
      propsData: {
        variant: 'danger',
      },
    });
    expect(wrapper.vm.$options.name).toMatch('VsButton');
    expect(wrapper.classes()).toContain('vs-button__danger');
    expect(wrapper.attributes('type')).toBe('button');
  });

  it('Check small button', () => {
    const wrapper = mount(VsButton, {
      propsData: {
        size: 'small',
      },
    });
    expect(wrapper.vm.$options.name).toMatch('VsButton');
    expect(wrapper.classes()).toContain('vs-button--small');
    expect(wrapper.classes()).not.toContain('vs-button--large');
    expect(wrapper.attributes('type')).toBe('button');
  });

  it('Check large button', () => {
    const wrapper = mount(VsButton, {
      propsData: {
        size: 'large',
      },
    });
    expect(wrapper.vm.$options.name).toMatch('VsButton');
    expect(wrapper.classes()).toContain('vs-button--large');
    expect(wrapper.classes()).not.toContain('vs-button--small');
    expect(wrapper.attributes('type')).toBe('button');
  });

  it('Check link', () => {
    const wrapper = mount(VsButton, {
      propsData: {
        variant: 'link',
        href: 'https://example.com',
        target: '_blank',
        rel: 'noreferrer noopener',
      },
    });
    expect(wrapper.vm.$options.name).toMatch('VsButton');
    expect(wrapper.find('a').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(false);
    expect(wrapper.classes()).toContain('vs-button__link');
    expect(wrapper.attributes('href')).toBe('https://example.com');
    expect(wrapper.attributes('target')).toBe('_blank');
    expect(wrapper.attributes('rel')).toBe('noreferrer noopener');
  });

  it('Check loading button', () => {
    const wrapper = mount(VsButton, {
      propsData: {
        isLoading: true,
        loaderSize: '20px',
        loaderColor: 'red',
      },
    });
    const event = jest.fn();
    const button = wrapper.find('button');
    expect(wrapper.vm.$options.name).toMatch('VsButton');
    expect(button.vm.$on('click', event));
    expect(event).toHaveBeenCalledTimes(0);
    button.trigger('click');
    expect(event).toHaveBeenCalledTimes(0);
    expect(wrapper.attributes('disabled')).toBe('disabled');
    expect(wrapper.classes()).toContain('vs-button--loading');
    const loader = wrapper.find('.vs-button--loading > div');
    expect(loader.classes()).toContain('vs-loader');
    expect(wrapper.props().loaderSize).toBe('20px');
    expect(wrapper.props().loaderColor).toBe('red');
  });
});
