/**
 * @file Registers `VsTooltip` for global use and re-exports the component.
 */
import VsTooltip from './vs-tooltip.vue';

/** Vue 2/3 plugin: registers `VsTooltip` on the application or constructor. */
const plugin = {
  /**
   * @param {import('vue').App | import('vue').VueConstructor} Vue - Vue 3 `app` or Vue 2 constructor
   */
  install(Vue) {
    Vue.component('VsTooltip', VsTooltip);
  },
};

export default VsTooltip;
export { plugin };
