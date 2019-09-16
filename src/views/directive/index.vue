<template>
  <div class="directive">
    <textarea v-model="copyText" class="content"></textarea>
    <button v-copy="copyText">复制</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      copyText: ''
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  width: 100%;
  height: 36px;
}
</style>
