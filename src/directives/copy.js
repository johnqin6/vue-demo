const vCopy = {
  bind (el, { value }) {
    // 用一个全局属性来存传进来的值，因为这个值在别的钩子函数里还会用到
    el.$event = value
    el.handle = () => {
      if (!el.$event) {
        alert('无复制内容')
        return
      }
      // 动态创建textarea标签
      const textarea = document.createElement('textarea')
      // 将该 textarea 设为readyonly 防止ios下自动唤起键盘，同时将textarea移出可视区域
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      // 将要 copy 的值赋给textarea标签的value属性
      textarea.value = el.$event
      // 将textarea插入到body中
      document.body.appendChild(textarea)

      // 选中值并复制
      textarea.select()
      textarea.setSelectionRange(0, textarea, value.length)
      const result = document.execCommand('Copy')
      if (result) {
        alert('复制成功')
      }
      document.body.removeChild(textarea)
    }
    // 绑定点击事件，就是所谓的一键copy
    el.addEventListener('click', el.handle)
  },
  // 当传进来的值更新时触发
  componentUpdated (el, { value }) {
    el.$event = value
  },
  // 指令与元素解绑时，移除事件绑定
  unbind (el) {
    el.removeEventListener('click', el.handle)
  }
}

export default vCopy
