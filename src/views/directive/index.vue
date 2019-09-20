<template>
  <div class="directive">
    <!-- <textarea v-model="copyText" class="content"></textarea>
    <button v-copy="copyText">复制</button> -->
    <slider-picture></slider-picture>
  </div>
</template>
<script>
import sliderPicture from '../../components/slidingPicture'

export default {
  data () {
    return {
      copyText: ''
    }
  },
  components: {
    sliderPicture
  },
  mounted () {
    this.showConfirm()
  },
  methods: {
    showConfirm () {
      this.$confirm({
        title: '是否关闭confirm弹框?'
      }).then(confirm => {
        console.log(confirm)
      }).catch(cancel => {
        console.log(cancel)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  width: 100%;
  height: 36px;
}
// .directive {
//   position: relative;
//   width: 300px;
//   padding: 0;
//   border-radius: 2px;
// }
</style>
