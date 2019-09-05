import Vue from 'vue'

export default {
  install (_vue, option) {
    _vue.prototype.$bus = new Vue()
  }
}
