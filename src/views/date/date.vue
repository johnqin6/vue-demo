<template>
  <div class="date">
    <div style="height: 20px;"></div>
    <date-picker v-model="curDate" placeholder="请选择日期"></date-picker>
  </div>
</template>
<script>
import datePicker from '@/components/dateTime/datePicker'

export default {
  name: 'date',
  data () {
    return {
      curDate: new Date()
    }
  },
  watch: {
    curDate (newVal) {
      console.log(newVal)
    }
  },
  components: {
    datePicker
  }
}
</script>
