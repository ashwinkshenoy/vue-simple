export default {
  // site-level options
  title: 'VueSimple',
  description: 'Simplifying dev experience.',

  lastUpdated: true,
  cleanUrls: true,
  appearance: false,

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

  themeConfig: {
    // theme-level options
    logo: { src: '/logos/favicon.png', width: 25, height: 25 },

    search: {
      provider: 'algolia',
      options: {
        appId: 'BH4D9OD16A',
        apiKey: '6d990b86d8298fb9ab5f36102aecf449',
        indexName: 'vuesimple',
      },
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Buy Me A Coffee', link: 'https://www.buymeacoffee.com/ashwinshenoy?utm_source=vuesimple' },
      { text: 'GitHub', link: 'https://github.com/ashwinkshenoy/vue-simple' },
    ],

    sidebar: [
      {
        text: 'Components',
        collapsible: false,
        items: [
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Alert', link: '/components/alert' },
          { text: 'Button', link: '/components/button' },
          { text: 'Datepicker', link: '/components/datepicker' },
          { text: 'Loader', link: '/components/loader' },
          { text: 'Modal', link: '/components/modal' },
          { text: 'Pagination', link: '/components/pagination' },
          { text: 'Select', link: '/components/select' },
          { text: 'Tag', link: '/components/tag' },
          { text: 'Toast', link: '/components/toast' },
        ],
      },
      {
        text: 'Grid',
        collapsible: false,
        items: [{ text: 'Introduction', link: '/grid/introduction' }],
      },
      {
        text: 'Utilities',
        collapsible: false,
        items: [
          { text: 'Introduction', link: '/utilities/introduction' },
          { text: 'Border', link: '/utilities/border' },
          { text: 'Colors', link: '/utilities/colors' },
          { text: 'Display', link: '/utilities/display' },
          { text: 'Position', link: '/utilities/position' },
          { text: 'Spacing', link: '/utilities/spacing' },
          { text: 'Typography', link: '/utilities/typography' },
          { text: 'Width', link: '/utilities/width' },
        ],
      },
    ],
  },
};

// import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
// import { pwaPlugin } from '@vuepress/plugin-pwa';
// import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
// import { docsearchPlugin } from '@vuepress/plugin-docsearch';
// import { getDirname, path } from '@vuepress/utils';
// import { defaultTheme } from 'vuepress';

// const getPages = require('./utilities');

// module.exports = {
//   base: '/',
//   plugins: [
//     registerComponentsPlugin({
//       componentsDir: path.resolve(__dirname, './components'),
//     }),
//     pwaPlugin({
//       serviceWorker: true,
//       updatePopup: true,
//     }),
//     backToTopPlugin(),
//     docsearchPlugin({
//       // options
//       appId: 'BH4D9OD16A',
//       apiKey: '6d990b86d8298fb9ab5f36102aecf449',
//       indexName: 'vuesimple',
//       rateLimit: 6,
//     }),
//     // [
//     //   '@vuepress/search',
//     //   {
//     //     searchMaxSuggestions: 10,
//     //   },
//     // ],
//   ],
//   head: [
//     ['link', { rel: 'icon', href: `/favicon.png` }],
//     ['link', { rel: 'apple-touch-icon', href: `/favicon.png` }],
//     ['link', { rel: 'manifest', href: '/manifest.json' }],
//     ['meta', { name: 'theme-color', content: '#ffffff' }],
//     ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
//     ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
//     [
//       'script',
//       {
//         async: true,
//         src: 'https://www.googletagmanager.com/gtag/js?id=G-E4BDWDXT0L',
//       },
//     ],
//     [
//       'script',
//       {},
//       "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-E4BDWDXT0L');",
//       ,
//     ],
//   ],
//   docsDir: 'docs',
//   host: 'localhost',
//   title: 'Vue Simple',
//   description: 'We love what we do.',
//   vueThemes: {
//     linksHome: ['Get Started'],
//     links: {
//       github: 'https://github.com/ashwinkshenoy/vue-simple',
//     },
//   },
//   theme: defaultTheme({
//     logo: '/logos/vue-simple.svg',
//     repo: 'https://github.com/ashwinkshenoy/vue-simple',
//     docsDir: 'docs',
//     lastUpdated: 'Last Updated',
//     editLinks: true,
//     editLinkText: 'Help us improve this page!',
//     smoothScroll: true,
//     colorModeSwitch: false,
//     navbar: [
//       // NavbarItem
//       {
//         text: 'Buy Me A Coffee',
//         link: 'https://www.buymeacoffee.com/ashwinshenoy?utm_source=vue_simple',
//       },
//     ],
//     sidebar: [
//       {
//         text: 'Components',
//         collapsible: false,
//         children: getPages('./docs/components/'),
//       },
//       {
//         text: 'Grid',
//         collapsible: false,
//         children: getPages('./docs/grid/'),
//       },
//       {
//         text: 'Utilities',
//         collapsible: false,
//         children: getPages('./docs/utilities/'),
//       },
//     ],
//     sidebarDepth: 1,
//   }),
// };
