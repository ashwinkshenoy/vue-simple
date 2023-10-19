import VsDatepicker from './vs-datepicker.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsDatepicker', VsDatepicker);
  },
};

export default VsDatepicker;
export { plugin };
