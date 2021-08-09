import Vue from 'vue'
import App from './App.vue'
import router from './router'

import yingziUi from 'yingzi-ui'
import 'yingzi-ui/packages/fonts/iconfont.css'
Vue.use(yingziUi)

import '@/style/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
