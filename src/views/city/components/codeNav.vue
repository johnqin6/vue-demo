<template>
  <div class="code-nav">
    <ul>
      <li class="item" :class="{'active': currentIndex === index}"
        v-for="(item,index) in letters" :key="item"
        :ref="item"
        @click="handleLetterClick($event, index)"
        @touchstart.stop="handleTouchStart"
        @touchmove.stop.prevent="handleTouchMove"
        @touchend.stop="handleTouchEnd"
      >{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'code-nav',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      currentIndex: 0
    }
  },
  computed: {
    letters () {
      var letters = []
      for (let key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e, index) {
      this.currentIndex = index
      this.$bus.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      console.log(e)
      if (this.touchStatus) {
        // 函数节流
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.startY = this.$refs['A'][0].offsetTop
          const touchY = e.touches[0].clientY - 40
          const index = Math.floor((touchY - this.startY) / 20)
          console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$bus.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="less" scoped>
  .code-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50px;
    width: 20px;
    right: 0;
    bottom: 0;
    background: lightblue;
    .item {
      text-align: center;
      line-height: 20px;
      font-size: 12px;
    }
    .active {
      color: orange;
    }
  }
</style>
