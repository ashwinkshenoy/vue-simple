export const themeData = JSON.parse("{\"logo\":\"/logos/vue-simple.svg\",\"repo\":\"https://github.com/ashwinkshenoy/vue-simple\",\"docsDir\":\"docs\",\"lastUpdated\":\"Last Updated\",\"editLinks\":true,\"editLinkText\":\"Help us improve this page!\",\"smoothScroll\":true,\"colorModeSwitch\":false,\"navbar\":[{\"text\":\"Buy Me A Coffee\",\"link\":\"https://www.buymeacoffee.com/ashwinshenoy?utm_source=vue_simple\"}],\"sidebar\":[{\"text\":\"Components\",\"collapsible\":true,\"children\":[\"/components/accordion\",\"/components/alert\",\"/components/button\",\"/components/datepicker\",\"/components/loader\",\"/components/modal\",\"/components/pagination\",\"/components/select\",\"/components/tag\",\"/components/toast\"]},{\"text\":\"Grid\",\"collapsible\":true,\"children\":[\"/grid/\"]},{\"text\":\"Utilities\",\"collapsible\":true,\"children\":[\"/utilities/\",\"/utilities/border\",\"/utilities/colors\",\"/utilities/display\",\"/utilities/position\",\"/utilities/spacing\",\"/utilities/typography\",\"/utilities/width\"]}],\"sidebarDepth\":1,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
