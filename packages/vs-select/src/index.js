import VsSelect from './vs-select.vue';
import VsMultiselect from './vs-multiselect.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsSelect', VsSelect);
    Vue.component('VsMultiselect', VsMultiselect);
  },
};

export default plugin;
