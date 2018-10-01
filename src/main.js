// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Professor from '@/components/Professor'
import Phd from '@/components/Phd'
import Master from '@/components/Master'
import Publication from '@/components/Publication'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Professor',
    component: Professor
  },
  {
    path: '/Phd',
    component: Phd
  },
  {
    path: '/Master',
    component: Master
  },
  {
    path: '/Publication',
    component: Publication
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
