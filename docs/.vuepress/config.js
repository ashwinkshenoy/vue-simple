import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { pwaPlugin } from '@vuepress/plugin-pwa';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { getDirname, path } from '@vuepress/utils';
import { defaultTheme } from 'vuepress';

const getPages = require('./utilities');

module.exports = {
  base: '/',
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    pwaPlugin({
      serviceWorker: true,
      updatePopup: true,
    }),
    backToTopPlugin(),
    docsearchPlugin({
      // options
      appId: 'BH4D9OD16A',
      apiKey: '6d990b86d8298fb9ab5f36102aecf449',
      indexName: 'vuesimple',
      rateLimit: 6,
    }),
    // [
    //   '@vuepress/search',
    //   {
    //     searchMaxSuggestions: 10,
    //   },
    // ],
  ],
  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }],
    ['link', { rel: 'apple-touch-icon', href: `/favicon.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-E4BDWDXT0L',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-E4BDWDXT0L');",
      ,
    ],
  ],
  docsDir: 'docs',
  host: 'localhost',
  title: 'Vue Simple',
  description: 'We love what we do.',
  vueThemes: {
    linksHome: ['Get Started'],
    links: {
      github: 'https://github.com/ashwinkshenoy/vue-simple',
    },
  },
  theme: defaultTheme({
    logo: '/logos/vue-simple.svg',
    repo: 'https://github.com/ashwinkshenoy/vue-simple',
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    smoothScroll: true,
    colorModeSwitch: false,
    navbar: [
      // NavbarItem
      {
        text: 'Buy Me A Coffee',
        link: 'https://www.buymeacoffee.com/ashwinshenoy?utm_source=vue_simple',
      },
    ],
    sidebar: [
      {
        text: 'Components',
        collapsible: true,
        children: getPages('./docs/components/'),
      },
      {
        text: 'Grid',
        collapsible: true,
        children: getPages('./docs/grid/'),
      },
      {
        text: 'Utilities',
        collapsible: true,
        children: getPages('./docs/utilities/'),
      },
    ],
    sidebarDepth: 1,
  }),
};
