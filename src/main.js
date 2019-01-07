// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Professor from '@/components/Professor'
import Phd from '@/components/Phd'
import Master from '@/components/Master'
import Publication from '@/components/Publication'
import Resource from '@/components/Resource'
import Gallery from '@/components/Gallery'
import Youtube from '@/components/Youtube'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

// 分頁路徑
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
  },
  {
    path: '/Resource',
    component: Resource
  },
  {
    path: '/Gallery',
    component: Gallery
  },
  {
    path: '/Youtube',
    component: Youtube
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
