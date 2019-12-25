<template>
  <div class="echarts-demo">
    <bar-echart
      :xData="barData.xData"
      :dataList="barData.dataList">
    </bar-echart>
    <line-echart
      :xData="lineData.xData"
      :series="lineData.series"
      :legend="lineData.legend">
    </line-echart>
    <pie-echart
      :dataList="pieData.dataList"
      :legend="pieData.legend">
    </pie-echart>
    <!-- <pie-echart
      pieType="radius"
      :dataList="pieData.dataList"
      :legend="pieData.legend">
    </pie-echart> -->
    <p>
      <button @click="qrcode">生成二维码</button>
      <img :src="qrcodeUlr" width="60" height="60">
    </p>
    <div>
      <button @click="pageImage">将页面生成图片</button>
      <!-- <img :src="pageImageUlr" width="100"> -->
      <button class="btn">下载图片</button>
    </div>
    <div class="footer">
      <div class="gotop" v-show="gotop" @click="toTop">Top</div>
    </div>
  </div>
</template>
<script>
import barEchart from '../../components/echarts/barEchart'
import lineEchart from '../../components/echarts/lineEchart'
import pieEchart from '../../components/echarts/pieEchart'
import QRCode from 'qrcode'
import html2canvas from 'html2canvas'

export default {
  components: {
    barEchart,
    lineEchart,
    pieEchart
  },
  data () {
    return {
      qrcodeUlr: '',
      gotop: false,
      barData: {
        xData: ['产品A', '产品B', '产品C', '产品D', '产品E', '产品F'],
        dataList: [212, 215, 255, 65, 750, 325]
      },
      lineData: {
        legend: {
          data: ['产品产品产品产品产品产品产品A产品产品产品产品产品产品产品A', '产品B', '产品C', '产品D', '产品E', '产品F'],
          bottom: 20
        },
        xData: ['201901', '201902', '201903', '201904', '201905'],
        series: [
          {
            name: '产品产品产品产品产品产品产品A产品产品产品产品产品产品产品A',
            type: 'line',
            stack: '总量',
            color: '#f0f',
            data: [12, 132, 90, 130, 110]
          },
          {
            name: '产品B',
            type: 'line',
            stack: '总量',
            data: [120, 182, 90, 30, 31]
          },
          {
            name: '产品C',
            type: 'line',
            stack: '总量',
            data: [15, 23, 190, 30, 41]
          },
          {
            name: '产品D',
            type: 'line',
            stack: '总量',
            data: [32, 33, 39, 30, 32]
          },
          {
            name: '产品E',
            type: 'line',
            stack: '总量',
            data: [82, 93, 129, 133, 132]
          },
          {
            name: '产品F',
            type: 'line',
            stack: '总量',
            data: [52, 33, 109, 133, 132]
          }
        ]
      },
      pieData: {
        legend: {
          show: false,
          data: ['产品产品产品产品产品产品产品A产品产品产品产品产品产品产品A', '产品产品产品产品产品产品产品B', '产品产品产品产品产品产品产品C', '产品D', '产品E', '产品F', '产品W', '产品EY', '产品X']
        },
        dataList: [
          { value: 1, name: '产品产品产品产品产品产品产品A产品产品产品产品产品产品产品A' },
          { value: 1, name: '产品产品产品产品产品产品产品B' },
          { value: 2, name: '产品产品产品产品产品产品产品C' },
          { value: 2, name: '产品产品产品产品产品产品产品D' },
          { value: 2, name: '产品产品产品产品产品产品产品E' },
          { value: 20, name: '产品产品产品产品产品产品产品F' },
          { value: 10, name: '产品产品产品产品产品产品产品W' },
          { value: 30, name: '产品产品产品产品产品产品产品FY' },
          { value: 50, name: '产品产品产品产品产品产品产品X' }
        ]
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.barData.dataList = [300, 215, 500, 65, 750, 25]
    }, 2000)
    // 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    async qrcode () {
      // 使用qrcode生成二维码
      const options = {}
      const url = window.location.href
      try {
        this.qrcodeUlr = await QRCode.toDataURL(url, options)
        console.log(this.qrcodeUlr)
      } catch (err) {
        console.error(err)
      }
    },
    // 将页面生成图片
    async pageImage () {
      // 简单使用
      // html2canvas(document.body).then((canvas) => {
      //   console.log(canvas)
      //   document.body.appendChild(canvas)
      // })
      // 生成清晰的高倍图
      const scaleSize = 2
      const newCanvas = document.createElement('canvas')
      // const target = document.querySelector('body')
      const target = document.body
      const width = parseInt(window.getComputedStyle(target).width)
      const height = parseInt(window.getComputedStyle(target).height)
      console.log(width, height)
      newCanvas.width = width * scaleSize
      newCanvas.height = height * scaleSize
      newCanvas.style.width = width + 'px'
      newCanvas.style.height = height + 'px'
      const context = newCanvas.getContext('2d')
      context.scale(scaleSize, scaleSize)
      html2canvas(document.body, { canvas: newCanvas }).then(canvas => {
        // 简单的通过超链接设置下载功能
        console.log(canvas)
        document.body.appendChild(canvas)
        document.querySelector('.btn').setAttribute('href', canvas.toDataURL())
      })
    },
    handleScroll () {
      let scolltop = document.documentElement.scrollTop || document.body.scrollTop
      scolltop > 30 ? (this.gotop = true) : (this.gotop = false)
    },
    toTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    }
  }
}
</script>
<style scoped>
.footer .gotop {
  text-align: center;
  position: fixed;
  right: 50px;
  bottom: 30px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background: white;
  color: #000000;
}
</style>
