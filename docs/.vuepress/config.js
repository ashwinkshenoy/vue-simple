const getPages = require('./utilities');

module.exports = {
  base: '/',
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    // [
    //   '@vuepress/search',
    //   {
    //     searchMaxSuggestions: 10,
    //   },
    // ],
    ['@vuepress/back-to-top'],
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
  themeConfig: {
    logo: '/logos/vue-simple.svg',
    docsDir: 'docs',
    repo: '',
    lastUpdated: 'Last Updated',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    smoothScroll: true,
    algolia: {
      apiKey: '6d990b86d8298fb9ab5f36102aecf449',
      indexName: 'vuesimple',
      algoliaOptions: {
        hitsPerPage: 6,
      },
    },
    searchPlaceholder: 'Search...',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Buy Me A Coffee', link: 'https://www.buymeacoffee.com/ashwinshenoy?utm_source=vuesimple' },
      { text: 'GitHub', link: 'https://github.com/ashwinkshenoy/vue-simple' },
    ],
    sidebar: [
      {
        title: 'Components',
        collapsable: false,
        children: getPages('./docs/components/'),
      },
      {
        title: 'Grid',
        collapsable: false,
        children: getPages('./docs/grid/'),
      },
      {
        title: 'Utilities',
        collapsable: false,
        children: getPages('./docs/utilities/'),
      },
    ],
  },
};
