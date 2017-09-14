import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
// import bxl from '@/components/bxl'

Vue.use(Router)
Vue.use(require('vue-wechat-title'))

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '彩票'
      }
    },
    {
      path: '/doubleBall',
      name: 'doubleBall',
      component: resolve => require(['../pages/doubleBall.vue'], resolve),
      meta: {
        title: '双色球'
      }
    },
    {
      path: '/order',
      name: 'doubleBall',
      component: resolve => require(['../pages/order.vue'], resolve),
      meta: {
        title: '下单购买'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../pages/login.vue'], resolve),
      meta: {
        title: '登录'
      }
    }
  ]
})
