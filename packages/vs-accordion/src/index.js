import VsAccordion from './vs-accordion.vue';
import VsAccordionItem from './vs-accordion-item.vue';

const plugin = {
  install(Vue) {
    Vue.component('VsAccordion', VsAccordion);
    Vue.component('VsAccordionItem', VsAccordionItem);
  },
};

export { VsAccordion, VsAccordionItem, plugin };
