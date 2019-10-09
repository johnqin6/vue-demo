<template>
  <ul class="dental-selection">
    <button type="sub" text @click="saveNewClue" v-show="saveShow">保存</button>
    <div class="dental_header">
      <dental-item :data="typeList" @chooseItem="chooseItem"></dental-item>
    </div>
    <div class="dental_body">
      <div class="aside">
        <dental-item
          :data="data1"
          class="dental_mtop"
          @chooseItem="chooseItem"
          :isStart="false"
        ></dental-item>
        <dental-item
          :data="data3"
          class="dental_mtop"
          @chooseItem="chooseItem"
          :isTop="false"
          :isStart="false"
        ></dental-item>
        <dental-item
          :data="data5"
          class="dental_mtop"
          :isStart="false"
          @chooseItem="chooseItem"
        ></dental-item>
        <dental-item
          :data="data7"
          class="dental_mtop"
          @chooseItem="chooseItem"
          :isTop="false"
          :isStart="false"
        ></dental-item>
      </div>
      <div class="aside_line_h"></div>
      <div class="dental_right">
        <dental-item :data="data2" class="dental_mtop" @chooseItem="chooseItem"></dental-item>
        <dental-item :data="data4" class="dental_mtop" @chooseItem="chooseItem"></dental-item>
        <dental-item :data="data6" class="dental_mtop" :isTop="false" @chooseItem="chooseItem"></dental-item>
        <dental-item :data="data8" class="dental_mtop" :isTop="false" @chooseItem="chooseItem"></dental-item>
      </div>
      <div class="aside_line_s"></div>
    </div>
    <div class="dental_tooth_bit">
      牙位
      <br />
      <dental-item :data="toothPostionList" :count="8" @chooseItem="chooseSpan"></dental-item>
    </div>
    <ul class="footer">
      <h2 class="title">部位选择器</h2>
      <ul class="choose-box">
        <li v-for="(item, index) in choosedData" :key="index" class="choose-item">{{item.name}}</li>
      </ul>
    </ul>
  </ul>
</template>
<script>
import dentalItem from './components/dentalItem.vue'

export default {
  data () {
    return {
      saveShow: true,
      typeList: [
        { name: '上口-乳', id: 1, type: 'big', isChoose: false },
        { name: '下口-乳', id: 2, type: 'big', isChoose: false },
        { name: '上口-恒', id: 3, type: 'big', isChoose: false },
        { name: '下口-恒', id: 4, type: 'big', isChoose: false }
      ],
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      data5: [],
      data6: [],
      data7: [],
      data8: [],
      data9: [],
      chooseList: [],
      spanlist: ['La', 'B', 'F', 'M', 'I/O', 'D', 'L', 'P'],
      labelData: {
        NumberList: [1, 2, 3, 4, 5, 6, 7, 8],
        latterList: ['A', 'B', 'C', 'D', 'E'],
        toothPostionList: ['La', 'B', 'F', 'M', 'I/O', 'D', 'L', 'p']
      },
      curspan: '',
      new_positon: '',
      new_remark: '',
      accountid: '',
      new_diagnosis: [],
      curtooth: 0,
      stepTooth: 0
    }
  },
  computed: {
    toothPostionList () {
      if (this.curtooth && this.chooseList.length) {
        let list = this.chooseList.filter(item => item.id === this.curtooth)
        if (!list.length) {
          let list = this.chooseList.filter(item => item.id === this.stepTooth)
          if (!list.length) {
            list = this.chooseList.filter(item => item.isChoose)
            let obj = list[list.length - 1]
            return obj.new_diagnosis
          }
        }
        return list[0].new_diagnosis
      } else {
        return this.data9
      }
    },
    choosedData () {
      let list = []
      if (this.curtooth) {
        let chooseList = this.chooseList.filter(item => item.id === this.curtooth)
        let data = chooseList.filter(item => item.isChoose)
        if (data.length) {
          data.forEach(item => {
            list = [...item.new_diagnosis]
          })
          list = list.filter(item => item.isChoose)
          list.push(data[0])
        }
      }
      return list
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.data9 = this.setToothData(this.labelData.toothPostionList, '9')
      this.data1 = this.setToothData(this.labelData.latterList, '1', 'desc')
      this.data2 = this.setToothData(this.labelData.latterList, '2')
      this.data3 = this.setToothData(this.labelData.NumberList, '3', 'desc')
      this.data4 = this.setToothData(this.labelData.NumberList, '4')
      this.data7 = this.setToothData(this.labelData.latterList, '7', 'desc')
      this.data8 = this.setToothData(this.labelData.latterList, '8')
      this.data5 = this.setToothData(this.labelData.NumberList, '5', 'desc')
      this.data6 = this.setToothData(this.labelData.NumberList, '6')
      this.data1.push(this.data1.shift())
      this.data2.push(this.data2.shift())
    },
    handleDiagnosis (arr) {
      let list = []
      arr.forEach(item => {
        list.push({
          name: item.name,
          id: item.id,
          type: item.type,
          isChoose: item.isChoose
        })
      })
      return list
    },
    // 建立牙齿数据
    setToothData (arr, type, sort) {
      if (sort === 'desc') {
        arr = arr.reverse()
      }
      let list = []
      let id = parseInt(type)
      let diagnosis = this.handleDiagnosis(this.data9)
      for (let i = 0; i < arr.length; i++) {
        list.push({
          name: arr[i],
          id: id * 100 + i,
          type: type,
          isChoose: false,
          new_diagnosis: diagnosis
        })
      }
      return list
    },
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
        this.handleChooseData(row.type, row.id, row.isChoose)
      }
      let data1 = this.data1.filter(item => item.isChoose)
      let data2 = this.data2.filter(item => item.isChoose)
      let data3 = this.data3.filter(item => item.isChoose)
      let data4 = this.data4.filter(item => item.isChoose)
      let data5 = this.data5.filter(item => item.isChoose)
      let data6 = this.data6.filter(item => item.isChoose)
      let data7 = this.data7.filter(item => item.isChoose)
      let data8 = this.data8.filter(item => item.isChoose)
      this.chooseList = [
        ...data1,
        ...data2,
        ...data3,
        ...data4,
        ...data5,
        ...data6,
        ...data7,
        ...data8
      ]
    },
    handleChooseData (type, id, isChoose) {
      let length = this.chooseList.length
      if (length && isChoose && id !== this.chooseList[length - 1].id) {
        this.curtooth = id
        return
      }
      this[`data${type}`] = this[`data${type}`].map(item => {
        if (item.id === id) {
          item.isChoose = !item.isChoose
          if (!item.isChoose) {
            item.new_diagnosis = item.new_diagnosis.map(ites => {
              ites.isChoose = false
              return ites
            })
            this.curtooth = this.stepTooth
          } else if (item.isChoose) {
            this.stepTooth = this.curtooth
            this.curtooth = id
          }
        }
        return item
      })
      console.log(this[`data${type}`])
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
    },
    getposition (val) {
      let p = 1
      switch (val) {
        case '1':
        case '3':
          p = 1
          break
        case '2':
        case '4':
          p = 2
          break
        case '5':
        case '7':
          p = 4
          break
        case '6':
        case '8':
          p = 3
          break
      }
      return p
    },
    // 过滤Diagnosis的值
    filterDiagnosis (arr, key) {
      let list = []
      for (let i = 0; i < arr.length; i++) {
        list.push(arr[i][key])
      }
      return list
    },
    // 保存
    async saveNewClue () {
      console.log(this.chooseList)
      let choosetooth = []
      for (let i = 0; i < this.chooseList.length; i++) {
        let item = this.chooseList[i]
        let area = []
        for (let j = 0; j < item.new_diagnosis.length; j++) {
          if (item.new_diagnosis[j].isChoose) {
            area.push(item.new_diagnosis[j])
          }
        }
        let tooth = {}
        tooth.new_positon = this.getposition(item.type)
        tooth.new_tooth = item.name
        tooth.new_diagnosis = this.filterDiagnosis(area, 'name')
        choosetooth.push(tooth)
      }
      var params = {
        tooth: choosetooth,
        new_area: this.spanlist.indexOf(this.curspan) + 1,
        new_remark: this.new_remark
      }
      console.log(params)
    },
    chooseSpan (row) {
      if (!this.curtooth) {
        alert('请先选择牙齿')
        return false
      }
      this.chooseList = this.chooseList.map(item => {
        if (item.id === this.curtooth) {
          item.new_diagnosis = item.new_diagnosis.map(ites => {
            if (ites.id === row.id) {
              ites.isChoose = !ites.isChoose
            }
            return ites
          })
        }
        return item
      })
      // console.log(this.chooseList)
    }
  },
  components: {
    dentalItem
  }
}
</script>
<style lang="less">
.dental_header {
  padding-top: 8px;
  background-color: white;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
.cascader_div {
  width: 100%;
  background: white;
  padding-left: 10px;
  box-sizing: border-box;
  span {
    display: inline-block;
    font-size: 14px;
  }
}
.dental_body {
  overflow: hidden;
  .aside {
    float: left;
    width: 35%;
    margin-left: 14%;
  }
  .dental_right {
    float: right;
    margin-right: 14%;
  }
  .aside_line_h {
    width: 2px;
    height: 184px;
    background: rgb(239, 239, 239);
    float: left;
    margin-top: 96px;
    margin-left: 1%;
  }
  .aside_line_s {
    width: 184px;
    height: 2px;
    background: rgb(239, 239, 239);
    position: absolute;
    top: 215px;
    left: 120px;
  }
}
.dental_tooth_bit {
  width: 100%;
  span {
    display: inline-block;
    width: 22px;
    height: 22px;
    border: 1px solid gray;
    margin: 10px;
    text-align: center;
    line-height: 22px;
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
.dental_mtop {
  margin-top: 10px;
}
.teeht_item{
  width:20px;
}
.el-input--suffix .el-input__inner {
  border: none;
}
.el-cascader .el-input {
  margin-left: 59px;
}
.cur-span {
  background: blue;
  color: #fff;
}
</style>
