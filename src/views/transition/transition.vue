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
      <button @click="add">add</button>
      <button @click="remove">remove</button>
      <transition-group name="list" tag="p">
        <span class="list-item" v-for="item in items" :key="item">
          {{item}}
        </span>
      </transition-group>
    </div>
  </div>
</template>
<script>
import testA from './component/testA'

export default {
  data () {
    return {
      show: true,
      isShow: true,
      isShow1: true,
      isShow2: true,
      radioVal: 'A',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    randomIndex () {
      return Math.floor(Math.random() * this.items.length)
    },
    add () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove () {
      this.items.splice(this.randomIndex(), 1)
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

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
