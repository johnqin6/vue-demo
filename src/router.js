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
      path: '/singer',
      name: '歌手列表',
      component: () => import('./views/singers/singerList.vue')
    },
    {
      path: '/city',
      name: '城市选择组件',
      component: () => import('./views/city/city.vue')
    },
    {
      path: '/transition',
      name: '过渡示例',
      component: () => import('./views/transition/transition.vue')
    },
    {
      path: '/echart',
      name: 'echart示例',
      component: () => import('./views/echarts')
    },
    {
      path: '/directive',
      name: '自定义指令dome',
      component: () => import('./views/directive')
    },
    {
      path: '/date',
      name: '时间组件示例',
      component: () => import('./views/date/date')
    },
    {
      path: '/dentalSelection',
      name: '口腔检查组件',
      component: () => import('./views/dentalSelection/dentalSelection1')
    },
    {
      path: '/lang/demo',
      name: '多语言demo',
      component: () => import('./views/lang/demo.vue')
    }
  ]
})
