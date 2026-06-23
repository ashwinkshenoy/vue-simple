import VsInput from './vs-input.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsInput', VsInput);
  },
};

export default VsInput;
export { plugin };
