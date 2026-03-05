import VsTabs from './vs-tabs.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsTabs', VsTabs);
  },
};

export default VsTabs;
export { plugin };
