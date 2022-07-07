export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Vue Simple\",\"description\":\"We love what we do.\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.png\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/favicon.png\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.json\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#ffffff\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"script\",{\"async\":true,\"src\":\"https://www.googletagmanager.com/gtag/js?id=G-E4BDWDXT0L\"}],[\"script\",{},\"window.dataLayer = window.dataLayer || [];\\nfunction gtag(){dataLayer.push(arguments);}\\ngtag('js', new Date());\\ngtag('config', 'G-E4BDWDXT0L');\",null]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
