<template>
  <div class="date-picker">
    <div class="input-content" v-delegation>
      <input
        type="text"
        v-model="innerValue"
        :placeholder="placeholder"
        class="input-inner">
      <i class="icon icon-date"></i>
    </div>
    <transition name="slide">
      <div class="date-picker-container" v-if="visible">
        <date-picker-wrap></date-picker-wrap>
      </div>
    </transition>
  </div>
</template>
<script>
import datePickerWrap from './datePickerWrap'

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
      visible: false
    }
  },
  components: {
    datePickerWrap
  },
  directives: {
    delegation: {
      bind (el, binding) {
        el.handle = (e) => {
          if (el.contains(e.target)) return false
          if (binding.expression) {
            binding.value()
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
.date-picker-container {
  position: absolute;
  top: 42px;
  left: 1px;
  width: 300px;
  height: 260px;
  box-shadow: 1px 1px 1px #ccc, -1px -1px 1px #ccc;
  overflow: hidden;
}
.slide-enter,
.slide-leave-to {
  height: 0;
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}
</style>
