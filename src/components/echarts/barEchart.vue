<template>
  <div class="bar-echart">
    <chart ref="echart" :options="options" :auto-resize="true" class="echart"></chart>
  </div>
</template>
<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/chart/bar'

export default {
  name: 'bar-echart',
  props: {
    xData: {
      type: Array,
      default: () => []
    },
    dataList: {
      type: Array,
      default: () => []
    },
    barName: {
      type: String,
      default: ''
    },
    // 是否显示y轴
    showY: {
      type: Boolean,
      default: true
    },
    // 柱状图实例颜色
    color: {
      type: String,
      default: '#3398DB'
    }
  },
  data () {
    return {
      options: {}
    }
  },
  watch: {
    xData (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.initEchart()
      }
    },
    dataList (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.initEchart()
      }
    }
  },
  mounted () {
    this.initEchart()
  },
  methods: {
    initEchart () {
      this.options = {
        color: this.color,
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.xData,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: {
          type: 'value',
          axisLine: {
            show: this.showY
          }
        },
        series: [
          {
            name: this.barName,
            type: 'bar',
            barWidth: '60%',
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#333'
              }
            },
            data: this.dataList
          }
        ]
      }
    }
  },
  components: {
    'chart': Echarts
  }
}
</script>
<style lang="less" scoped>
  .bar-echart {
    width: 100%;
    .echart {
      width: 100%;
      height: 300px;
    }
  }
</style>
