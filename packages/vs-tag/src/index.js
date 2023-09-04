import VsTag from './vs-tag.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsTag', VsTag);
  },
};

export default plugin;
