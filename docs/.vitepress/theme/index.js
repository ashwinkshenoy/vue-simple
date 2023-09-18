import DefaultTheme from 'vitepress/theme';
import Masthead from '../components/Masthead.vue';
import ComponentLinks from '../components/ComponentLinks.vue';
import ColorBox from '../components/ColorBox.vue';
import ColorGrid from '../components/ColorGrid.vue';
import './index.scss';

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.component('Masthead', Masthead);
    ctx.app.component('ComponentLinks', ComponentLinks);
    ctx.app.component('ColorBox', ColorBox);
    ctx.app.component('ColorGrid', ColorGrid);
  },
};
