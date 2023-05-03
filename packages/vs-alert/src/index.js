import VsAlert from './vs-alert.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsAlert', VsAlert);
  },
};

export default plugin;
