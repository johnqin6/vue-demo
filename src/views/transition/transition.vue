<template>
  <div class="transition">
    <button class="btn" @click.stop="show = !show">过渡示例</button>
    <transition name="opacity">
      <p v-if="show">这是一个过渡示例</p>
    </transition>
    <button class="btn" @click.stop="isShow = !isShow">动画示例</button>
    <transition name="animate">
      <p v-if="isShow">这是一个动画示例</p>
    </transition>
    <button class="btn" @click.stop="isShow1 = !isShow1">自定义过渡类名</button>
    <transition
      name="customClass"
      enter-active-class="tade"
      leave-active-class="bounceOutRight"
    >
      <p v-show="isShow1">这是一个自定义过渡类名示例</p>
    </transition>
    <button class="btn" @click.stop="isShow2 = !isShow2">多个元素示例</button>
    <transition name="opacity">
      <p v-if="isShow2" key="1">这是一个过渡示例</p>
      <p v-else key="2">这是另一个过渡示例</p>
    </transition>
    <p>
      多个组件示例：
      <input type="radio" v-model="radioVal" value="A"> A
      <input type="radio" v-model="radioVal" value="B"> B
    </p>
    <transition name="opacity" mode="out-in">
      <test-a :title="radioVal" :is="radioVal"></test-a>
    </transition>
    <div class="list">
      <h2>列表过渡</h2>
      <button @click="suffle">shuffle</button>
      <button @click="add">add</button>
      <button @click="remove">remove</button>
      <transition-group name="list" tag="p">
        <span class="list-item" v-for="item in items" :key="item">
          {{item}}
        </span>
      </transition-group>
    </div>
    <div class="list">
      <h2>列表的排序过渡</h2>
      <button @click="suffle">suffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" :key="item">
          {{item}}
        </li>
      </transition-group>
    </div>
    <div class="staggered-list-demo">
      <input v-model="query" />
      <transition-group
        name="staggered-fade"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        tag="ul">
        <li
          v-for="(item,index) in computedList" :key="item.msg"
          :data-index="index">
          {{ item.msg }}
        </li>
      </transition-group>
    </div>
  </div>
</template>
<script>
import testA from './component/testA'
// import Velocity from 'velocity'

export default {
  data () {
    return {
      show: true,
      isShow: true,
      isShow1: true,
      isShow2: true,
      radioVal: 'A',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      query: '',
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ]
    }
  },
  computed: {
    computedList () {
      return this.list.filter(item => {
        return item.msg.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter (el, done) {
      let delay = el.dataset.index * 150
      setTimeout(() => {
        // Velocity(
        //   el,
        //   { opacity: 1, height: '1.6em' },
        //   { complete: done }
        // )
        el.style.opacity = 1
        el.style.height = '1.6em'
      }, delay)
    },
    leave (el, done) {
      let delay = el.dataset.index * 150
      setTimeout(() => {
        // Velocity(
        //   el,
        //   { opacity: 0, height: 0 },
        //   { complete: done }
        // )
        el.style.opacity = 0
        el.style.height = 0
      }, delay)
    },
    randomIndex () {
      return Math.floor(Math.random() * this.items.length)
    },
    add () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove () {
      this.items.splice(this.randomIndex(), 1)
    },
    suffle () {
      this.items = this.suffleArr(this.items)
    },
    // 打乱数组顺序
    suffleArr (arr) {
      let _arr = [...arr]
      _arr.sort(() => Math.random() - 0.5)
      return _arr
    }
  },
  components: {
    testA
  }
}
</script>
<style lang="less" scoped>
.opacity-enter,
.opacity-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
.opacity-enter-active, .opacity-leave-active {
  transition: all 5s ease;
}

.animate-enter-active {
  animation: bounce 1s;
}
.animate-leave-active {
  animation: bounce 1s reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0) translateX(0%);
  }
  50% {
    transform: scale(1.5) translateX(50%);
  }
  100% {
    transform: scale(1) translateX(0%);
  }
}

.tade {
  animation: tade 1s;
}
@keyframes tade {
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
.bounceOutRight {
  animation: bounceOutRight 3s;
}
@keyframes bounceOutRight {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(30px, 30px);
  }
  20% {
    transform: translate(30px, 0px);
  }
  30% {
    transform: translate(30px, -30px);
  }
  40% {
    transform: translate(60px, 0px);
  }
  50% {
    transform: translate(60px, -30px);
  }
  60% {
    transform: translate(30px, 0px);
  }
  70% {
    transform: translate(30px, 30px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.list {
  margin-left: 20px;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
  transition: all 1s;
}
.list-leave-active {
  // transition: all 1s;
  position: absolute;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.flip-list-move {
  transition: all 1s;
}
</style>
