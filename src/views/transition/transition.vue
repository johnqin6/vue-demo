<template>
  <div class="transition">
    <button class="btn" @click.stop="show = !show">过渡示例</button>
    <transition name="opacity">
      <p v-if="show">这是一个过渡示例</p>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: true
    }
  }
}
</script>
<style lang="less" scoped>
.opacity-enter,
.opacity-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
.opacity-enter-active {
  transition: all 6s;
}
.opacity-leave {
  opacity: 1;
  transition: all 3s;
}
</style>
