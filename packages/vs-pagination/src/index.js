import VsPagination from './vs-pagination.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsPagination', VsPagination);
  },
};

export default VsPagination;
export { plugin };
