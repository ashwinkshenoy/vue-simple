import DefaultTheme from 'vitepress/theme';
import Masthead from '../components/Masthead.vue';
import ComponentLinks from '../components/ComponentLinks.vue';
import ColorBox from '../components/ColorBox.vue';
import ColorGrid from '../components/ColorGrid.vue';
import './index.scss';

export default {
  extends: DefaultTheme,
  async enhanceApp(ctx) {
    // register your custom global components
    ctx.app.component('Masthead', Masthead);
    ctx.app.component('ComponentLinks', ComponentLinks);
    ctx.app.component('ColorBox', ColorBox);
    ctx.app.component('ColorGrid', ColorGrid);

    // Registered before DocSearch mounts, so this runs first. Stops Algolia's Cmd/Ctrl+K on the spotlight page only.
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', event => {
        const isShortcut = (event.metaKey || event.ctrlKey) && String(event.key).toLowerCase() === 'k';
        if (isShortcut && window.location.pathname.includes('/components/spotlight')) {
          event.stopImmediatePropagation();
        }
      });
    }
  },
};
