<template>
  <transition name="slide">
    <div class="date-picker-wrap">
      <div class="date-header">
        <span @click="reduceMonth">&lt;</span>
        <span @click="reduceYear">&lt;&lt;</span>
        <span>{{ time.year }}年</span>
        <span>{{ time.month + 1 }}月</span>
        <span @click="addYear">&gt;&gt;</span>
        <span @click="addMonth">&gt;</span>
      </div>
      <div class="day-container">
        <div class="row week-row">
          <span class="col" v-for="col in weekList" :key="col">
            {{col}}
          </span>
        </div>
        <div class="row" v-for="row in 6" :key="row">
          <span
            class="col"
            :class="[
              { 'notCurMonth': !isCurMonth(dayList[(row - 1) * 7 + (col - 1)]) },
              { 'today': isToday(dayList[(row - 1) * 7 + (col - 1)]) },
              { 'isChoosed': isChoosed(dayList[(row - 1) * 7 + (col - 1)])}
            ]"
            @click="chooseDate(dayList[(row - 1) * 7 + (col - 1)])"
            v-for="col in 7" :key="col + 'a'">
            {{ getCurColDate(row, col) }}
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { getYearMonthDay, getDate } from '../../utils/util'

export default {
  name: 'datePickerWrap',
  props: {
    value: {
      type: Date,
      default: () => new Date()
    }
  },
  data () {
    return {
      weekList: ['日', '一', '二', '三', '四', '五', '六'],
      dayList: [],
      time: {
        year: null,
        month: null
      },
      curDate: null
    }
  },
  mounted () {
    this.curDate = this.value
    this.setDayList()
  },
  methods: {
    isChoosed (date) {
      let { year, month, day } = getYearMonthDay(this.value)
      let { year: y, month: m, day: d } = getYearMonthDay(date)
      return y === year && month === m && day === d
    },
    chooseDate (date) {
      this.$emit('input', date)
    },
    reduceMonth () {
      if (this.time.month > 0) {
        this.time.month = this.time.month - 1
      } else {
        this.time.year = this.time.year - 1
        this.time.month = 11
      }
      this.curDate = getDate(this.time.year, this.time.month, 2)
      this.setDayList()
    },
    addMonth () {
      if (this.time.month < 11) {
        this.time.month = this.time.month + 1
      } else {
        this.time.year = this.time.year + 1
        this.time.month = 0
      }
      this.curDate = getDate(this.time.year, this.time.month, 2)
      this.setDayList()
    },
    reduceYear () {
      this.time.year--
      this.curDate = getDate(this.time.year, this.time.month, 2)
      this.setDayList()
    },
    addYear () {
      this.time.year++
      this.curDate = getDate(this.time.year, this.time.month, 2)
      this.setDayList()
    },
    // 建立时间数组
    setDayList () {
      // 得到传入的时间或当前时间的年月
      let { year, month } = getYearMonthDay(this.curDate)
      this.time = getYearMonthDay(this.curDate)
      // 获取当月第一天
      let curFirstDay = getDate(year, month, 1)
      // 获取当月第一天周几
      let week = curFirstDay.getDay() === 0 ? 7 : curFirstDay.getDay()
      // 当前开始的天数
      let startDay = curFirstDay - week * 60 * 60 * 1000 * 24
      // 循环42天
      this.dayList = []
      for (let i = 0; i < 42; i++) {
        this.dayList.push(new Date(startDay + (i * 60 * 60 * 1000 * 24)))
      }
    },
    // 判断是否是当月
    isCurMonth (date) {
      let { year, month } = getYearMonthDay(this.curDate)
      let { year: y, month: m } = getYearMonthDay(date)
      return y === year && month === m
    },
    // 是否是今天
    isToday (date) {
      let { year, month, day } = getYearMonthDay(new Date())
      let { year: y, month: m, day: d } = getYearMonthDay(date)
      return y === year && month === m && day === d
    },
    // 每一列的时间
    getCurColDate (row, col) {
      let index = (row - 1) * 7 + (col - 1)
      return new Date(this.dayList[index]).getDate()
    }
  }
}
</script>
<style lang="less" scoped>
.date-picker-wrap {
  position: absolute;
  top: 42px;
  left: 1px;
  width: 250px;
  height: 260px;
  box-shadow: 1px 1px 1px #ccc, -1px -1px 1px #ccc;
  overflow: hidden;
  .date-header {
    display: flex;
    width: 100%;
    height: 30px;
    line-height: 30px;
    justify-content: space-around;
    margin-bottom: 10px;
    cursor: pointer;
    user-select: none;
  }
  .row {
    display: flex;
    height: 26px;
    line-height: 26px;
    text-align: center;
    .col {
      flex: 1;
      border-radius: 3px;
      cursor: pointer;
      user-select: none;
      box-sizing: border-box;
      &:hover {
        border: 1px solid pink;
      }
    }
    .notCurMonth {
      color: #ccc;
    }
    .today {
      background-color: red;
      color: #fff;
    }
    .isChoosed {
      border: 1px solid pink;
    }
  }
  .week-row {
    color: #333;
  }
}
.slide-enter,
.slide-leave-to {
  height: 0;
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}
</style>
