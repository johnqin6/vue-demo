<template>
  <div class="directive">
    <!-- <textarea v-model="copyText" class="content"></textarea>
    <button v-copy="copyText">复制</button> -->
    <slider-picture v-show="false"></slider-picture>
    <baidu-map class="map" center="北京" style="height: 400px;">
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    </baidu-map>
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
