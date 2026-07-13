const getPages = require('./utilities');
const path = require('path');
const fs = require('fs');

function getPackageVersion(pkgName) {
  try {
    const pkgPath = path.resolve(__dirname, `../../packages/${pkgName}/package.json`);
    return JSON.parse(fs.readFileSync(pkgPath, 'utf-8')).version;
  } catch {
    return 'latest';
  }
}

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

  vite: {
    plugins: [
      {
        name: 'replace-version',
        enforce: 'pre',
        transform(code, id) {
          if (!id.endsWith('.md')) return;
          // Extract package name from @vuesimple/pkg-name references in the file
          return code.replace(/<version>/g, () => {
            const match = code.match(/@vuesimple\/(vs-[a-z-]+)/);
            return match ? getPackageVersion(match[1]) : 'latest';
          });
        },
      },
    ],
  },

  themeConfig: {
    // theme-level options
    logo: { src: '/logos/favicon.png', width: 25, height: 25 },

    search: {
      provider: 'algolia',
      options: {
        // appId: 'BH4D9OD16A',
        // apiKey: '6d990b86d8298fb9ab5f36102aecf449',
        // indexName: 'vuesimple',
        container: '#docsearch',
        appId: 'N00SKFI1B6',
        indexName: 'vuesimple',
        apiKey: '90c910b6cd12631e750fb285b098de22',
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
        items: getPages('./docs/components/'),
      },
      {
        text: 'Grid',
        collapsible: false,
        items: [{ text: 'Introduction', link: '/grid/introduction' }],
      },
      {
        text: 'Utilities',
        collapsible: false,
        items: getPages('./docs/utilities/'),
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
