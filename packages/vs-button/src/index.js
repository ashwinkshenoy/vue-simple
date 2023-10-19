import VsButton from './vs-button.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsButton', VsButton);
  },
};

export default VsButton;
export { plugin };
