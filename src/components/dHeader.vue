<template>
  <header class="d-header">
    <div class="d-header-container">
      <span class="back" @click="back">&lt;</span>
      <h2 class="title">{{ title }}</h2>
    </div>
  </header>
</template>
<script>
export default {
  name: 'd-header',
  props: {
    title: {
      String,
      default: '标题'
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
<style lang="less" scoped>
.d-header {
  height: 50px;
  .d-header-container {
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #aaa;
    color: #fff;
    .back {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 50px;
      height: 50px;
      color: #fff;
      line-height: 50px;
      font-size: 30px;
    }
  }
}
</style>
