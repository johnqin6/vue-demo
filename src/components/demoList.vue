<template>
  <ul class="demo-list">
    <li class="list-item"
      @click="chooseItem(item)"
      v-for="(item, index) in demoList" :key="index"
    >
      <h2 class="title">{{ item.title }}</h2>
      <p class="desc">{{ item.desc }}</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'demo-list',
  data () {
    return {
      demoList: [
        { title: '歌手列表', desc: '字母导航，图片懒加载', path: '/singer' },
        { title: '城市列表', desc: '城市信息展示, 字母导航', path: '/city' }
      ]
    }
  },
  methods: {
    chooseItem (item) {
      this.$router.push({
        path: item.path
      })
    }
  }
}
</script>
<style lang="less" scoped>
.demo-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  .list-item {
    padding: 20px 10px;
    border-bottom: 1px solid #f0f0f0;
    line-height: 20px;
    cursor: pointer;
    .title {
      font-size: 18px;
      line-height: 30px;
    }
    .desc {
      font-size: 14px;
    }
  }
}
</style>
