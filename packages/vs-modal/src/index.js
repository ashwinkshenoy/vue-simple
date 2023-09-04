import VsModal from './vs-modal.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsModal', VsModal);
  },
};

export default plugin;
