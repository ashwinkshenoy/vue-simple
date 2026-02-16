import VsSwitch from './vs-switch.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsSwitch', VsSwitch);
  },
};

export default VsSwitch;
export { plugin };
