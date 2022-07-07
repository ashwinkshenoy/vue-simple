import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Home", defineAsyncComponent(() => import("/Users/ashwin.shenoy/Documents/personal/code/vue_simple_3/docs/.vuepress/components/Home.vue"))),
      app.component("Masthead", defineAsyncComponent(() => import("/Users/ashwin.shenoy/Documents/personal/code/vue_simple_3/docs/.vuepress/components/Masthead.vue"))),
      app.component("colorBox", defineAsyncComponent(() => import("/Users/ashwin.shenoy/Documents/personal/code/vue_simple_3/docs/.vuepress/components/colorBox.vue"))),
      app.component("colorGrid", defineAsyncComponent(() => import("/Users/ashwin.shenoy/Documents/personal/code/vue_simple_3/docs/.vuepress/components/colorGrid.vue"))),
      app.component("componentLinks", defineAsyncComponent(() => import("/Users/ashwin.shenoy/Documents/personal/code/vue_simple_3/docs/.vuepress/components/componentLinks.vue")))
  },
}
