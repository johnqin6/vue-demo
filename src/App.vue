<template>
  <div id="app">
    <d-header :title="title"></d-header>
    <router-view/>
  </div>
</template>
<script>
import dHeader from './components/dHeader'

export default {
  name: 'app',
  computed: {
    title () {
      return this.$route.name
    }
  },
  components: {
    dHeader
  },
  mounted () {
    console.log(this.$route.name)
  }
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
ul, ol {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
