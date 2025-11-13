import VsMenu from './vs-menu.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsMenu', VsMenu);
  },
};

export default VsMenu;
export { plugin };
