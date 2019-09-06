<template>
  <section class="city-list" ref="wrapper">
    <!-- <div ref="wrapper"> -->
      <!-- 当前城市 -->
      <panel title="当前城市">
        <d-button>南阳</d-button>
      </panel>
      <!-- 热门城市 -->
      <panel title="热门">
        <d-button class="item" v-for="item in hotCities" :key="item.id">
          {{item.name}}
        </d-button>
      </panel>
      <!-- 城市列表 -->
      <div v-for="(items,key) in cities" :key="key" :ref="key">
        <panel :title="key">
          <d-button class="item" v-for="item in items" :key="item.id">
            {{item.name}}
          </d-button>
        </panel>
      </div>
      <!-- 弹出层 -->
      <transition name="fade">
        <div class="totast" v-show="showToast">
          <span class="letter">{{letter}}</span>
        </div>
      </transition>
    <!-- </div> -->
  </section>
</template>
<script>
import panel from '../../../components/panel'
import dButton from '../../../components/dButton'
import BScroll from 'better-scroll'

export default {
  name: 'city-list',
  props: {
    cities: Object,
    hotCities: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      letter: '',
      showToast: false
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const elment = this.$refs[this.letter][0]
        this.scroll.scrollToElement(elment)
        this.changeToast()
      }
    }
  },
  mounted () {
    this.$bus.$on('change', letter => {
      this.letter = letter
    })
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  },
  destroyed () {
    this.$bus.$off('change')
  },
  methods: {
    changeToast () {
      this.showToast = true
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.showToast = false
      }, 500)
    }
  },
  components: {
    panel,
    dButton
  }
}
</script>
<style lang="less" scoped>

.item {
  margin: 0 10px 10px 0;
}
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 50px;
    height: 50px;
    background-color: #ed4e5e;
    border-radius: 50%;
    text-align: center;
    transition: all 0.5s;
  }
  .letter {
    line-height: 50px;
    font-size: 16px;
    font-weight: 700;
    color: #eee;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-leave, .fade-enter-active {
    opacity: 1;
  }
  .fade-leave-active {
    opacity: 0;
  }
</style>
