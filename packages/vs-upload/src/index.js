import VsUpload from './vs-upload.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsUpload', VsUpload);
  },
};

export default VsUpload;
export { plugin };
