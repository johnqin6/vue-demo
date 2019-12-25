<template>
  <div class="line-echart">
    <chart ref="echart" :options="options" :auto-resize="true" class="echart"></chart>
  </div>
</template>
<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'

export default {
  name: 'line-echart',
  props: {
    // 线状图类别设置
    legend: {
      type: Object,
      default: () => {}
    },
    xData: {
      type: Array,
      default: () => []
    },
    series: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      options: {}
    }
  },
  mounted () {
    this.initEchart()
  },
  methods: {
    initEchart () {
      this.options = {
        tooltip: {
          trigger: 'axis',
          confine: true, // 将 tooltip 框限制在图表的区域内
          // formatter: '{a} <br/> ' + '{b} ' + ' <br/>{c}'
          formatter: (params, ticket, callback) => {
            let result = params[0].name
            params.forEach((item) => {
              if (item.seriesName && item.seriesName.length > 20) {
                item.seriesName = this.cutWordWrap(item.seriesName, 20)
              }
              if (item.data) {
                result += '<br/>' + item.seriesName + ' : ' + item.data
              }
            })
            return result
          }
        },
        legend: this.legend,
        grid: {
          left: '3%',
          right: '4%',
          bottom: '70px',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xData
        },
        yAxis: {
          type: 'value'
        },
        series: this.series
      }
    },
    // 截取n个字段为一行
    cutWordWrap (value, n) {
      let str = ''
      for (let i = 0; i < value.length; i++) {
        str += value[i]
        if ((i + 1) % n === 0 && i !== 0) {
          str += '<br/>'
        }
      }
      return str
    }
  },
  components: {
    chart: Echarts
  }
}
</script>
<style lang="less" scoped>
.line-echart {
  width: 100%;
  .echart {
    width: 100%;
    height: 300px;
  }
}
</style>
