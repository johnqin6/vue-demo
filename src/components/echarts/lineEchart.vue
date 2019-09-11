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
          trigger: 'axis'
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
