import VsSpotlight from './vs-spotlight.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsSpotlight', VsSpotlight);
  },
};

export default VsSpotlight;
export { plugin };
