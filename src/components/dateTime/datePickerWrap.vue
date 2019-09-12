<template>
  <div class="date-picker-wrap">
    <div class="date-header">
      <span>&lt;</span>
      <span>&lt;&lt;</span>
      <span>{{ year }}年</span>
      <span>{{ month }}月</span>
      <span>&gt;&gt;</span>
      <span>&gt;</span>
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
          v-for="col in 7" :key="col + 'a'">
          {{ getCurColDate(row, col) }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
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
      year: '',
      month: ''
    }
  },
  mounted () {
    this.setDayList()
  },
  methods: {
    // 建立时间数组
    setDayList () {
      // 得到传入的时间或当前时间的年月
      let { year, month } = this.getYearMonthDay(this.value)
      this.year = year
      this.month = month
      // 得到当月有多少天
      let curMonthDays = new Date(year, month, 0).getDate()
      // 得到当月第一天星期几
      let curFirstDay = new Date(year, month, 1).getDay() === 0 ? 7 : new Date(year, month, 1).getDay()
      // 将上月的天数添加到数组中
      for (let i = curFirstDay; i > 0; i--) {
        this.dayList.push(new Date(new Date(year, month, 1).setDate(0 - i)))
      }
      // 将当月的天数添加到数组中
      for (let i = 1; i <= curMonthDays; i++) {
        this.dayList.push(new Date(year, month, i))
      }
      let length = 42 - this.dayList.length
      // 将下月的天数添加到数组中
      for (let i = 1; i <= length; i++) {
        this.dayList.push(new Date(new Date(year, month, 1).setDate(i + curMonthDays)))
      }
    },
    // 每一列的时间
    getCurColDate (row, col) {
      let index = (row - 1) * 7 + (col - 1)
      return this.getDateWithDate(this.dayList[index])
    },
    // 得到天数
    getDateWithDate (val) {
      let d = new Date(val.toString())
      return d.getDate()
    },
    // 得到年月日
    getYearMonthDay (val) {
      return {
        year: val.getFullYear(),
        month: val.getMonth(),
        day: val.getDate()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.date-picker-wrap {
  width: 100%;
  height: 100%;
  .date-header {
    display: flex;
    width: 100%;
    height: 30px;
    line-height: 30px;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  .row {
    display: flex;
    height: 26px;
    line-height: 26px;
    text-align: center;
    .col {
      flex: 1;
    }
  }
  .week-row {
    color: #333;
  }
}
</style>
