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
  ],
  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }],
    ['link', { rel: 'apple-touch-icon', href: `/favicon.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
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
    repo: 'https://github.com/ashwinkshenoy/vue-simple',
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    smoothScroll: true,
    algolia: {
      apiKey: '06162ea3ef6ab72eecfde4fe3f555fbe',
      indexName: 'cargo-vue',
    },
    searchPlaceholder: 'Search...',
    sidebar: [
      // {
      //   title: 'Development',
      //   collapsable: true,
      //   children: getPages('./docs/development/'),
      // },
      {
        title: 'Components',
        collapsable: true,
        children: getPages('./docs/components/'),
      },
      {
        title: 'Utilities',
        collapsable: true,
        children: getPages('./docs/utilities/'),
      },
    ],
  },
};
