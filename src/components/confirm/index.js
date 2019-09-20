import Vue from 'vue'
import Confirm from './confirm.vue'

let newInstance
// 创建构造函数
const ConfirmInstance = Vue.extend(Confirm)

// 执行方法后完成挂载
const initInstance = () => {
  newInstance = new ConfirmInstance() // 实例化
  document.body.appendChild(newInstance.$mount().$el)
  // 实例化后手动挂载，得到$el真实dom, 将其添加到body最后
}

// 导出一个方法，接收配置参数
export default options => {
  if (!newInstance) {
    initInstance() // 挂载
  }
  Object.assign(newInstance, options)
  // 实例化后newInstance就是一个对象了，所有data内的数据会挂载到this下，传入一个对象与之合并
  return newInstance.show(vm => { // 显示弹框
    newInstance = null // 将实例对象清空
  }).then(confirm => {
    return Promise.resolve(confirm) // 确认的回调
  }).catch(cancel => {
    return Promise.reject(cancel) // 取消的回调
  })
}
