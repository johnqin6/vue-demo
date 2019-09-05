<template>
  <div class="panel">
    <h2 class="title">{{title}}</h2>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'panel',
  props: ['title']
}
</script>
<style lang="less" scoped>
.panel {
  .title {
    height: 36px;
    padding: 0 10px;
    line-height: 36px;
    background-color: #eee;
    color: #333;
    font-size: 16px;
  }
  .content {
    padding: 10px;
  }
}
</style>
