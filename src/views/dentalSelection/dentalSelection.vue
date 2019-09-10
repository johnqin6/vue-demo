<template>
  <div class="dental-selection">
    <div class="header">
      <dental-item :data="typeList" @chooseItem="chooseItem"></dental-item>
    </div>
    <div class="body">
      <div class="aside">
        <dental-item :data="data1" class="mtop" @chooseItem="chooseItem"></dental-item>
        <dental-item :data="data3" class="mtop" @chooseItem="chooseItem" :isStart="false"></dental-item>
        <dental-item :data="data5" class="mtop" :isTop="false" :isStart="false" @chooseItem="chooseItem"></dental-item>
        <dental-item :data="data7" class="mtop" @chooseItem="chooseItem"></dental-item>
      </div>
      <div class="aside right">
        <dental-item :data="data2" class="mtop" @chooseItem="chooseItem"></dental-item>
        <dental-item :data="data4" class="mtop" @chooseItem="chooseItem"></dental-item>
        <dental-item :data="data6" class="mtop" :isTop="false" @chooseItem="chooseItem"></dental-item>
        <dental-item :data="data8" class="mtop" @chooseItem="chooseItem"></dental-item>
      </div>
    </div>
    <div class="footer">
      <h2 class="title">部位选择器</h2>
      <ul class="choose-box">
        <li v-for="(item, index) in chooseList" :key="index" class="choose-item">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import dentalItem from './components/dentalItem'

export default {
  data () {
    return {
      typeList: [
        { name: '上口-乳', id: 1, type: 'big', isChoose: false },
        { name: '下口-乳', id: 2, type: 'big', isChoose: false },
        { name: '上口-恒', id: 3, type: 'big', isChoose: false },
        { name: '下口-恒', id: 4, type: 'big', isChoose: false }
      ],
      data1: [
        { name: 'E', id: 11, type: '1', isChoose: false },
        { name: 'D', id: 12, type: '1', isChoose: false },
        { name: 'C', id: 13, type: '1', isChoose: false },
        { name: 'B', id: 14, type: '1', isChoose: false },
        { name: 'A', id: 15, type: '1', isChoose: false }
      ],
      data2: [
        { name: 'A', id: 16, type: '2', isChoose: false },
        { name: 'B', id: 17, type: '2', isChoose: false },
        { name: 'C', id: 18, type: '2', isChoose: false },
        { name: 'D', id: 19, type: '2', isChoose: false },
        { name: 'E', id: 20, type: '2', isChoose: false }
      ],
      data3: [
        { name: 8, id: 101, type: '3', isChoose: false },
        { name: 7, id: 102, type: '3', isChoose: false },
        { name: 6, id: 103, type: '3', isChoose: false },
        { name: 5, id: 107, type: '3', isChoose: false },
        { name: 4, id: 108, type: '3', isChoose: false },
        { name: 3, id: 109, type: '3', isChoose: false },
        { name: 2, id: 110, type: '3', isChoose: false },
        { name: 1, id: 111, type: '3', isChoose: false }
      ],
      data4: [
        { name: 1, id: 112, type: '4', isChoose: false },
        { name: 2, id: 113, type: '4', isChoose: false },
        { name: 3, id: 114, type: '4', isChoose: false },
        { name: 4, id: 115, type: '4', isChoose: false },
        { name: 5, id: 116, type: '4', isChoose: false },
        { name: 6, id: 104, type: '4', isChoose: false },
        { name: 7, id: 105, type: '4', isChoose: false },
        { name: 8, id: 106, type: '4', isChoose: false }
      ],
      data5: [
        { name: 8, id: 101, type: '5', isChoose: false },
        { name: 7, id: 102, type: '5', isChoose: false },
        { name: 6, id: 103, type: '5', isChoose: false },
        { name: 5, id: 107, type: '5', isChoose: false },
        { name: 4, id: 108, type: '5', isChoose: false },
        { name: 3, id: 109, type: '5', isChoose: false },
        { name: 2, id: 110, type: '5', isChoose: false },
        { name: 1, id: 111, type: '5', isChoose: false }
      ],
      data6: [
        { name: 1, id: 112, type: '6', isChoose: false },
        { name: 2, id: 113, type: '6', isChoose: false },
        { name: 3, id: 114, type: '6', isChoose: false },
        { name: 4, id: 115, type: '6', isChoose: false },
        { name: 5, id: 116, type: '6', isChoose: false },
        { name: 6, id: 104, type: '6', isChoose: false },
        { name: 7, id: 105, type: '6', isChoose: false },
        { name: 8, id: 106, type: '6', isChoose: false }
      ],
      data7: [
        { name: 'E', id: 11, type: '7', isChoose: false },
        { name: 'D', id: 12, type: '7', isChoose: false },
        { name: 'C', id: 13, type: '7', isChoose: false },
        { name: 'B', id: 14, type: '7', isChoose: false },
        { name: 'A', id: 15, type: '7', isChoose: false }
      ],
      data8: [
        { name: 'A', id: 16, type: '8', isChoose: false },
        { name: 'B', id: 17, type: '8', isChoose: false },
        { name: 'C', id: 18, type: '8', isChoose: false },
        { name: 'D', id: 19, type: '8', isChoose: false },
        { name: 'E', id: 20, type: '8', isChoose: false }
      ],
      chooseList: []
    }
  },
  mounted () {
    // this.data7 = this.recursiveClone(this.data1)
    // this.data8 = this.recursiveClone(this.data2)
    // this.data5 = [...this.data3]
    // this.data6 = [...this.data4]
  },
  methods: {
    chooseItem (row) {
      if (row.type === 'big') {
        this.typeList = this.typeList.map(item => {
          if (item.id === row.id) {
            item.isChoose = !item.isChoose
            this.handleData(row.id, item.isChoose)
          }
          return item
        })
      } else {
        this.handleChooseData(row.type, row.id)
      }
      // let typeList = this.typeList.filter(item => item.isChoose)
      let data1 = this.data1.filter(item => item.isChoose)
      let data2 = this.data2.filter(item => item.isChoose)
      let data3 = this.data3.filter(item => item.isChoose)
      let data4 = this.data4.filter(item => item.isChoose)
      let data5 = this.data5.filter(item => item.isChoose)
      let data6 = this.data6.filter(item => item.isChoose)
      let data7 = this.data7.filter(item => item.isChoose)
      let data8 = this.data8.filter(item => item.isChoose)
      this.chooseList = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7, ...data8]
    },
    handleChooseData (type, id) {
      this[`data${type}`] = this[`data${type}`].map(item => {
        if (item.id === id) {
          item.isChoose = !item.isChoose
        }
        return item
      })
    },
    handleData (id, isChoose) {
      switch (id) {
        case 1:
          this.data1 = this.data1.map(item => {
            item.isChoose = isChoose
            return item
          })
          this.data2 = this.data2.map(item => {
            item.isChoose = isChoose
            return item
          })
          break
        case 2:
          this.data7 = this.data7.map(item => {
            item.isChoose = isChoose
            return item
          })
          this.data8 = this.data8.map(item => {
            item.isChoose = isChoose
            return item
          })
          break
        case 3:
          this.data3 = this.data3.map(item => {
            item.isChoose = isChoose
            return item
          })
          this.data4 = this.data4.map(item => {
            item.isChoose = isChoose
            return item
          })
          break
        case 4:
          this.data5 = this.data5.map(item => {
            item.isChoose = isChoose
            return item
          })
          this.data6 = this.data6.map(item => {
            item.isChoose = isChoose
            return item
          })
          break
      }
    }
    // 深克隆
    // recursiveClone(val) {
    //   return Array.isArray(val) ? Array.from(val, this.recursiveClone) : val;
    // }
  },
  components: {
    dentalItem
  }
}
</script>
<style lang="less" scoped>
.header {
  padding: 5px 0;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
}
.body {
  overflow: hidden;
  .aside {
    float: left;
    width: 49%;
  }
  .right {
    float: right;
  }
}
.footer {
  text-align: center;
  .title {
    padding-left: 10px;
    font-size: 16px;
    text-align: left;
    line-height: 30px;
  }
  .choose-box {
    display: inline-block;
    overflow: hidden;
    .choose-item {
      float: left;
      height: 30px;
      padding: 0 10px;
      margin: 5px 5px 0 0;
      line-height: 30px;
      background-color: #eee;
    }
  }
}
.mtop {
  margin-top: 10px;
}
</style>
