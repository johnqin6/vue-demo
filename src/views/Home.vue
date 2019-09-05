<template>
  <div class="home">
    <h2 class="title">案例信息</h2>
    <demo-list></demo-list>
  </div>
</template>

<script>
import demoList from '../components/demoList'

export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    demoList
  }
}
</script>
<style lang="less" scoped>
.home {
  .title {
    padding: 20px;
    line-height: 36px;
    text-align: center;
  }
}
</style>
