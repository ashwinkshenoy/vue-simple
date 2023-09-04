import VsLoader from './vs-loader.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsLoader', VsLoader);
  },
};

export default plugin;
