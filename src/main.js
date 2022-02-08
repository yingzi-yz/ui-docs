import Vue from 'vue'
import App from './App.vue'
import router from './router'

import yingziUi from 'yingzi-ui'
import 'yingzi-ui/dist/iconfonts/iconfont.css'
Vue.use(yingziUi)

import '@/style/index.css'

// 引入高亮代码插件
import prismjs from '@/static/prism.js'
import prismCss from '@/static/prism.css'
Vue.use(prismjs)
Vue.use(prismCss)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
