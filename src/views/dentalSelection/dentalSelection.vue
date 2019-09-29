<template>
  <!-- <rt-view>
    <rt-header>
      <rt-navbar>
        <template slot="right">
          <rt-button type="sub" text @click="saveNewClue" v-show="saveShow">保存</rt-button>
        </template>
      </rt-navbar>
    </rt-header>
    <rt-content> -->
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
          <!-- <span
            @click="chooseSpan(item)"
            :class="{'cur-span': curspan === item}"
            v-for="(item,index) in spanlist"
            :key="index"
          >{{item}}</span> -->
          <dental-item :data="toothPostionList" :count="8" @chooseItem="chooseSpan"></dental-item>
        </div>
        <ul class="footer">
          <h2 class="title">部位选择器</h2>
          <ul class="choose-box">
            <li v-for="(item, index) in choosedData" :key="index" class="choose-item">{{item.name}}</li>
          </ul>
        </ul>
      </ul>
      <!-- <rt-form ref="form"> -->
        <!-- <div class="cascader_div">
          <span>牙齿诊断</span>
          <el-cascader
            class="cascader_ui"
            v-model="new_diagnosis"
            :options="options"
            @change="handleChange"
          ></el-cascader>
        </div>-->
        <!-- <rt-picklist
          entity="new_teethhealth"
          attribute="new_diagnosis"
          v-model="new_diagnosis"
          label="牙齿诊断"
        ></rt-picklist>
        <rt-text-input label="备注" placeholder="请输入备注" v-model="new_remark"></rt-text-input>
      </rt-form> -->
    <!-- </rt-content> -->
  <!-- </rt-view> -->
</template>
<script>
import dentalItem from './components/dentalItem.vue'

export default {
  data () {
    return {
      saveShow: true,
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则1'
            },
            {
              value: 'shejiyuanze',
              label: '设计原则2'
            }
          ]
        }
      ],
      typeList: [
        { name: '上口-乳', id: 1, type: 'big', isChoose: false },
        { name: '下口-乳', id: 2, type: 'big', isChoose: false },
        { name: '上口-恒', id: 3, type: 'big', isChoose: false },
        { name: '下口-恒', id: 4, type: 'big', isChoose: false }
      ],
      data1: [
        { name: 'D', id: 12, type: '1', isChoose: false },
        { name: 'C', id: 13, type: '1', isChoose: false },
        { name: 'B', id: 14, type: '1', isChoose: false },
        { name: 'A', id: 15, type: '1', isChoose: false },
        { name: 'E', id: 11, type: '1', isChoose: false }
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
        { name: 8, id: 121, type: '5', isChoose: false },
        { name: 7, id: 122, type: '5', isChoose: false },
        { name: 6, id: 123, type: '5', isChoose: false },
        { name: 5, id: 127, type: '5', isChoose: false },
        { name: 4, id: 128, type: '5', isChoose: false },
        { name: 3, id: 129, type: '5', isChoose: false },
        { name: 2, id: 130, type: '5', isChoose: false },
        { name: 1, id: 131, type: '5', isChoose: false }
      ],
      data6: [
        { name: 1, id: 142, type: '6', isChoose: false },
        { name: 2, id: 143, type: '6', isChoose: false },
        { name: 3, id: 144, type: '6', isChoose: false },
        { name: 4, id: 145, type: '6', isChoose: false },
        { name: 5, id: 146, type: '6', isChoose: false },
        { name: 6, id: 147, type: '6', isChoose: false },
        { name: 7, id: 148, type: '6', isChoose: false },
        { name: 8, id: 149, type: '6', isChoose: false }
      ],
      data7: [
        { name: 'D', id: 21, type: '7', isChoose: false },
        { name: 'C', id: 22, type: '7', isChoose: false },
        { name: 'B', id: 23, type: '7', isChoose: false },
        { name: 'A', id: 24, type: '7', isChoose: false },
        { name: 'E', id: 25, type: '7', isChoose: false }
      ],
      data8: [
        { name: 'A', id: 26, type: '8', isChoose: false },
        { name: 'B', id: 27, type: '8', isChoose: false },
        { name: 'C', id: 28, type: '8', isChoose: false },
        { name: 'D', id: 29, type: '8', isChoose: false },
        { name: 'E', id: 30, type: '8', isChoose: false }
      ],
      data9: [
        { name: 'La', id: 321, type: '9', isChoose: false },
        { name: 'B', id: 322, type: '9', isChoose: false },
        { name: 'F', id: 323, type: '9', isChoose: false },
        { name: 'M', id: 324, type: '9', isChoose: false },
        { name: 'I/O', id: 325, type: '9', isChoose: false },
        { name: 'D', id: 326, type: '9', isChoose: false },
        { name: 'L', id: 327, type: '9', isChoose: false },
        { name: 'P', id: 328, type: '9', isChoose: false }
      ],
      chooseList: [],
      spanlist: ['La', 'B', 'F', 'M', 'I/O', 'D', 'L', 'P'],
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
      console.log(list)
      return list
    }
  },
  mounted () {
    // this.accountid = this.$route.params.id;
    this.initData()
  },
  methods: {
    initData () {
      this.data1 = this.data1.map(item => {
        item.new_diagnosis = [...this.data9]
        item.new_diagnosis = this.handleDiagnosis(item.new_diagnosis)
        return item
      })
      this.data2 = this.data2.map(item => {
        item.new_diagnosis = [...this.data9]
        item.new_diagnosis = this.handleDiagnosis(item.new_diagnosis)
        return item
      })
      this.data3 = this.data3.map(item => {
        item.new_diagnosis = [...this.data9]
        item.new_diagnosis = this.handleDiagnosis(item.new_diagnosis)
        return item
      })
      this.data4 = this.data4.map(item => {
        item.new_diagnosis = [...this.data9]
        item.new_diagnosis = this.handleDiagnosis(item.new_diagnosis)
        return item
      })
      this.data5 = this.data5.map(item => {
        item.new_diagnosis = [...this.data9]
        item.new_diagnosis = this.handleDiagnosis(item.new_diagnosis)
        return item
      })
      this.data6 = this.data6.map(item => {
        item.new_diagnosis = [...this.data9]
        item.new_diagnosis = this.handleDiagnosis(item.new_diagnosis)
        return item
      })
      this.data7 = this.data7.map(item => {
        item.new_diagnosis = [...this.data9]
        item.new_diagnosis = this.handleDiagnosis(item.new_diagnosis)
        return item
      })
      this.data8 = this.data8.map(item => {
        item.new_diagnosis = [...this.data9]
        item.new_diagnosis = this.handleDiagnosis(item.new_diagnosis)
        return item
      })
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
    chooseItem (row) {
      this.data9.forEach(item => {
        item.isChoose = false
      })
      // console.log(row);
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
    handleChooseData (type, id) {
      this[`data${type}`] = this[`data${type}`].map(item => {
        if (item.id === id) {
          item.isChoose = !item.isChoose
          if (item.type != 9 && !item.isChoose) {
            this.curtooth = this.stepTooth
          } else if (item.type != 9 && item.isChoose) {
            item.new_diagnosis = this.handleDiagnosis(this.data9)
            this.stepTooth = this.curtooth
            this.curtooth = id
          }
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
        let new_diagnosis = []
        for (let j = 0; j < item.new_diagnosis.length; j++) {
          if (item.new_diagnosis[j].isChoose) {
            new_diagnosis.push(item.new_diagnosis[j])
          }
        }
        let tooth = {}
        tooth.new_positon = this.getposition(item.type)
        tooth.new_tooth = item.name
        tooth.new_diagnosis = this.filterDiagnosis(new_diagnosis, 'id')
        choosetooth.push(tooth)
      }
      var params = {
        tooth: choosetooth,
        // new_diagnosis: this.new_diagnosis,
        new_area: this.spanlist.indexOf(this.curspan) + 1,
        new_remark: this.new_remark
      }
      console.log(params)
      // var apiUrl = 'api/lead/saveteethhealth'
      // const res = await rt.post(apiUrl, params)
      // console.log(res)
    },

    handleChange (value) {
      // console.log(value)
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
