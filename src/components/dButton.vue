<template>
  <button class="d-button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'd-button'
}
</script>
<style lang="less" scoped>
.d-button {
  width: 60px;
  height: 30px;
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: transparent;
  line-height: 30px;
  text-align: center;
  color: #666;
}
</style>
