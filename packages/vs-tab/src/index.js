import VsTab from './vs-tab.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsTab', VsTab);
  },
};

export default VsTab;
export { plugin };
