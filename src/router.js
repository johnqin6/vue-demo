import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '案例首页',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/singer',
      name: '歌手列表',
      component: () => import('./views/singers/singerList.vue')
    },
    {
      path: '/city',
      name: '城市选择组件',
      component: () => import('./views/city/city.vue')
    }
  ]
})
