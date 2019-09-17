<template>
  <div class="date-picker" v-click-outside>
    <div class="input-content">
      <input
        type="text"
        v-model="innerValue"
        :placeholder="placeholder"
        class="input-inner">
      <i class="icon icon-date"></i>
    </div>
    <date-picker-wrap v-model="curValue" v-if="visible"></date-picker-wrap>
  </div>
</template>
<script>
import datePickerWrap from './datePickerWrap'
import { getYearMonthDay } from '../../utils/util'

export default {
  name: 'datePicker',
  props: {
    value: {
      type: Date
    },
    placeholder: String
  },
  data () {
    return {
      innerValue: '',
      curValue: null,
      visible: false
    }
  },
  watch: {
    curValue (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('input', newVal)
        this.innerValue = this.formatDate(newVal)
      }
    }
  },
  mounted () {
    this.innerValue = this.formatDate(this.value)
    this.curValue = this.value
  },
  methods: {
    // setValue (val) {
    //   this.innerValue = this.formatDate(val)
    //   this.curValue = val;
    //   this.close();
    // },
    show () {
      this.visible = true
    },
    close () {
      this.visible = false
    },
    formatDate (val) {
      let { year, month, day } = getYearMonthDay(val)
      return `${year}-${month + 1}-${day}`
    }
  },
  components: {
    datePickerWrap
  },
  directives: {
    clickOutside: {
      bind (el, binding, vnode) {
        el.handle = (e) => {
          // 判断面板是否已显示
          if (el.contains(e.target)) {
            if (!vnode.context.visible) {
              vnode.context.show()
            }
          } else {
            if (vnode.context.visible) {
              vnode.context.close()
            }
          }
        }
        document.addEventListener('click', el.handle)
      },
      unbind (el) {
        document.removeEventListener('click', el.handle)
      }
    }
  }
}
</script>
<style lang="less">
.date-picker {
  position: relative;
  .input-content {
    position: relative;
    .input-inner {
      height: 40px;
      padding-left: 30px;
      border: 1px solid #ccc;
      border-radius: 3px;
      line-height: 40px;
      font-size: 16px;
    }
    .icon {
      width: 25px;
      line-height: 40px;
    }
    .icon-date::before {
      content: '\e78e';
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}

</style>
