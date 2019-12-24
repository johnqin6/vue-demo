<template>
  <div>
    <p>
      <span>{{$t('message.Username')}}</span>
      <span>
        <input type="text" :placeholder="$t('message.Username')">
      </span>
    </p>
    <p>
      <label>
        <input type="radio" :value="0" v-model="language"> {{$t('message.zh')}}
      </label>
      <label>
        <input type="radio" :value="1" v-model="language"> {{$t('message.en')}}
      </label>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      language: 0
    }
  },
  mounted () {
    console.log(this)
    // 数据加载时判断当前属于什么语言
    this.$i18n.locale === 'zh' ? this.language = 0 : this.language = 1
    console.log(this.$i18n.locale, this.language)
  },
  watch: {
    language (val) { // 监听单选按钮的变化，从而进行切换语言
      val === 0 ? this.$i18n.locale = 'zh' : this.$i18n.locale = 'en'
      console.log(this.$i18n)
    }
  }
}
</script>
