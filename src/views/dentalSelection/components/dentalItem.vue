<template>
  <div class="dental">
    <ul class="dental-item" ref="dentalUl1">
      <li class="item"
        @click="chooseItem(item)"
        :class="{'active': item.isChoose}"
        v-for="item in dataList" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    <ul class="dental-item" ref="dentalUl2">
      <li class="item"
        @click="chooseItem(item)"
        :class="{'active': item.isChoose}"
        v-for="item in dataList2" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isTop: {
      type: Boolean,
      default: true
    },
    isStart: {
      type: Boolean,
      default: true
    },
    count: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      dataList: [],
      dataList2: [],
      styleObject: {}
    }
  },
  watch: {
    data (newVal) {
      if (newVal) {
        this.dataList = newVal
        this.computeLay()
      }
    }
  },
  mounted () {
    this.computeLay()
  },
  methods: {
    chooseItem (row, handle) {
      if (this.disabled) return
      this.$emit('chooseItem', row)
    },
    // 转换百分比
    percentage (val) {
      return val * 100
    },
    computeLay () {
      if (this.data.length > this.count) {
        let w, m
        if (this.isTop) {
          this.dataList = this.data.filter((item, index) => index >= this.count)
          this.dataList2 = this.data.filter((item, index) => index < this.count)
          w = this.percentage(this.dataList.length / this.count)
          m = this.percentage((this.count - this.dataList.length) / this.count)
        } else {
          this.dataList = this.data.filter((item, index) => index < this.count)
          this.dataList2 = this.data.filter((item, index) => index >= this.count)
          w = this.percentage(this.dataList2.length / this.count)
          m = this.percentage((this.count - this.dataList2.length) / this.count)
        }
        if (this.isTop) {
          this.$refs.dentalUl1.style.width = w + '%'
          if (!this.isStart) {
            this.$refs.dentalUl1.style.marginLeft = m + '%'
          }
        } else {
          this.$refs.dentalUl2.style.width = w + '%'
          if (!this.isStart) {
            this.$refs.dentalUl2.style.marginLeft = m + '%'
          }
        }
      } else {
        this.dataList = [...this.data]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.dental-item {
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
  .item {
    height: 30px;
    padding: 0 10px;
    border: 1px solid #ccc;
    line-height: 30px;
    cursor: pointer;
  }
  .active {
    background-color: blue;
    color: #fff;
  }
  .aready_active{
    background-color: grey;
    color: #fff;
  }
}
</style>
