<template>
  <div class="singer-list">
    <div class="list-view" ref="listView">
      <ul>
        <li class="list-group"
          v-for="group in singerList" :key="group.id"
          ref="listGroup"
        >
          <h2 class="list-group-title">{{ group.title }}</h2>
          <ul>
            <li class="list-group-item"
              v-for="item in group.items" :key="item.id"
            >
              <img class="avatar" v-lazy="item.avatar">
              <span class="name">{{ item.name }}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="list-shortcut">
        <ul>
          <li class="item"
            :data-index="index"
            v-for="(item, index) in shortcutList" :key="index"
            @touchstart="onShortcutStart"
            @touchmove.stop.prevent="onShortcutMove"
            :class="{'current': currentIndex === index}"
          >
            {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  name: 'singer-list',
  data () {
    return {
      scrollY: 0,
      currentIndex: 0
    }
  },
  computed: {
    singerList () {
      return this.$store.state.singerList
    },
    shortcutList () {
      return this.singerList.map(group => {
        return group.title.substr(0, 1)
      })
    }
  },
  watch: {
    scrollY (newVal) {
      // 向下滑动的时候 newVal 是一个负数，所以当 newVal > 0 时，currentIndex 直接为 0
      if (newVal > 0) {
        this.currentIndex = 0
        return
      }
      // 计算 currentIndex 的值
      for (let i = 0; i < this.listHeight.length - 1; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (-newVal >= height1 && -newVal < height2) {
          this.currentIndex = i
          return
        }
      }
      // 当超 -newVal > 最后一个高度的时候
      // 因为 this.listHeight 有头尾，所以需要 - 2
      this.currentIndex = this.listHeight.length - 2
    }
  },
  created () {
    this.$store.dispatch('getSingerList')
    this.touch = {}
    // 初始化 better-scroll 必须要等dom加载完毕
    setTimeout(() => {
      this.initScroll()
      this.calculateHeight()
    }, 200)
  },
  mounted () {
    console.log(this.singerList)
  },
  methods: {
    onShortcutStart (e) {
      // 获取到绑定的 index
      let index = e.target.getAttribute('data-index')
      // 使用 better-scroll 的 scrollToElement 方法实现跳转
      this.scrollToElement(index)
      // 记录一下点击时候的 Y坐标 和 index
      let firstTouch = e.touches[0].pageY
      this.touch.y1 = firstTouch
      this.touch.anchorIndex = index
    },
    onShortcutMove (e) {
      // 再记录一下移动时候的 Y坐标，然后计算出移动了几个索引
      let touchMove = e.touches[0].pageY
      this.touch.y2 = touchMove
      // 这里的 16.7 是索引元素的高度
      let delta = Math.floor((this.touch.y2 - this.touch.y1) / 16.7)
      // 计算最后的位置
      // * 1 是因为 this.touch.anchorIndex 是字符串，用 * 1 偷懒的转化一下
      let index = this.touch.anchorIndex * 1 + delta
      this.scrollToElement(index)
    },
    scrollToElement (index) {
      // 处理边界情况
      // 因为index 通过滑动距离计算出来的
      // 所以向上滑动超过索引框时就会 < 0,向上就会超过最大值
      if (index < 0) {
        return
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2
      }
      // listHeight 是正的， 所以加个 -
      this.scrollY = -this.listHeight[index]
      this.scroll.scrollToElement(this.$refs.listGroup[index])
    },
    // 初始化scroll
    initScroll () {
      this.scroll = new BScroll(this.$refs.listView, {
        probeType: 3,
        click: true
      })

      this.scroll.on('scroll', pos => {
        this.scrollY = pos.y
      })
    },
    // 计算高度
    calculateHeight () {
      this.listHeight = []
      const list = this.$refs.listGroup
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < list.length; i++) {
        let item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.singer-list {
  position: fixed;
  width: 100%;
  height: 100%;
}
.list-view {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(223, 223, 223);
  .list-group {
    padding-bottom: 30px;
    .list-group-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: 12px;
      color: #FFF;
      background: #C20C0C;
    }
    .list-group-item {
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 5%;
      }
      .name {
        margin-left: 20px;
        color: black;
        font-size: 14px;
      }
    }
  }
  .list-shortcut {
    position: absolute;
    z-index: 30;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: rgba(167, 167, 167, 0.5);
    font-family:Helvetica;
    .item {
      padding: 3px;
      line-height: 1;
      color: black;
      font-size: 11px;
      &.current {
        color: #C20C0C;
      }
    }
  }
}
</style>
