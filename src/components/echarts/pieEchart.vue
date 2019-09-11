<template>
  <div class="pie-echart">
    <chart ref="echart" :options="options" :auto-resize="true" class="echart"></chart>
  </div>
</template>
<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'

export default {
  name: 'pie-echart',
  props: {
    dataList: {
      type: Array,
      default: () => []
    },
    legend: {
      type: Object,
      default: () => {}
    },
    pieName: {
      type: String,
      default: ''
    },
    // 扇形图实例颜色
    color: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      options: {}
    }
  },
  watch: {
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
        // color: '#ff0',
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: this.legend,
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: this.dataList,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: '{b} {d}%'
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      console.log(this.options)
    }
  },
  components: {
    chart: Echarts
  }
}
</script>
<style lang="less" scoped>
.pie-echart {
  width: 100%;
  .echart {
    width: 100%;
    height: 300px;
  }
}
</style>
