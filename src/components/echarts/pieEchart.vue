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
    },
    // 饼图类型
    pieType: {
      type: String,
      default: 'center' // left, right,center... 皆为饼图，radius为环形
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
          // formatter: '{a} <br/>{b} : {c} ({d}%)',
          confine: true, // 将 tooltip 框限制在图表的区域内
          formatter: (params) => {
            if (params.name && params.name.length > 20) {
              params.name = this.cutWordWrap(params.name, 20)
            }
            let result = params.name + ' : ' + params.value
            return result
          }
        },
        // legend: this.legend,
        legend: {
          // type: 'scroll',
          show: true,
          data: this.legendData,
          formatter: function (name) {
            // return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
            if (name.length > 10) {
              return name.slice(0, 9) + '...'
            } else {
              return name
            }
          },
          tooltip: {
            show: true
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            [this.pieType]: ['50%', '70%'],
            data: this.dataList,
            // position: 'top',
            // bottom: 20,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  // position: 'center',
                  // formatter: '{b} {d}%'
                  formatter: '{d}%'
                  // textStyle: {
                  //   align: "left",
                  //   baseline: "top"
                  // }
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
.pie-echart {
  width: 100%;
  .echart {
    width: 100%;
    height: 300px;
  }
}
</style>
