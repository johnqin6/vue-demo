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
  </div>
</template>
<script>
import barEchart from '../../components/echarts/barEchart'
import lineEchart from '../../components/echarts/lineEchart'
import pieEchart from '../../components/echarts/pieEchart'

export default {
  components: {
    barEchart,
    lineEchart,
    pieEchart
  },
  data () {
    return {
      barData: {
        xData: ['产品A', '产品B', '产品C', '产品D', '产品E', '产品F'],
        dataList: [212, 215, 255, 65, 750, 325]
      },
      lineData: {
        legend: {
          data: ['产品A', '产品B', '产品C', '产品D', '产品E', '产品F'],
          bottom: 20
        },
        xData: ['201901', '201902', '201903', '201904', '201905'],
        series: [
          {
            name: '产品A',
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
          data: ['产品A', '产品B', '产品C', '产品D', '产品E', '产品F']
        },
        dataList: [
          { value: 10, name: '产品A' },
          { value: 15, name: '产品B' },
          { value: 20, name: '产品C' },
          { value: 10, name: '产品D' },
          { value: 25, name: '产品E' },
          { value: 20, name: '产品F' }
        ]
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.barData.dataList = [300, 215, 500, 65, 750, 25]
    }, 2000)
  }
}
</script>
