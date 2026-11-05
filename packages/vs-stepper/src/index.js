import VsStepper from './vs-stepper.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsStepper', VsStepper);
  },
};

export default VsStepper;
export { plugin };
