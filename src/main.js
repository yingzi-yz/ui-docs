import Vue from 'vue'
import App from './App.vue'
import router from './router'

import yingziUi from 'yingzi-ui'
import 'yingzi-ui/dist/iconfonts/iconfont.css'
Vue.use(yingziUi)

import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)    
  })
})

import '@/style/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
