import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/index'
import { WechatPlugin } from 'vux'

FastClick.attach(document.body)
Vue.use(WechatPlugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
