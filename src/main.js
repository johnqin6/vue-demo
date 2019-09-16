import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload' // 懒加载
import './plugins/index'
import directives from './directives'

Vue.use(VueLazyLoad, {
  loading: require('./assets/logo.png')
})

Vue.use(directives)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
