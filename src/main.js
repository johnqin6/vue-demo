import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload' // 懒加载
import './plugins/index'
import directives from './directives'
import Confirm from './components/confirm'
import BaiduMap from 'vue-baidu-map'

// 国际化多语言
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 使用语言包
const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages: {
    'zh': require('./common/lang/zh'), // 中文语言包
    'en': require('./common/lang/en') // 英文语言包
  }
})

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'ROninBdEIu93CBGDHc3fSPHE'
})

Vue.use(VueLazyLoad, {
  loading: require('./assets/logo.png')
})

Vue.use(directives)

Vue.prototype.$confirm = Confirm

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
