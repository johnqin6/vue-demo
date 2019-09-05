<template>
  <div class="city">
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <code-nav :cities="cities"></code-nav>
  </div>
</template>
<script>
import cityList from './components/cityList'
import codeNav from './components/codeNav'
import { getCityData } from '@/api/city'

export default {
  name: 'city',
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  components: {
    cityList,
    codeNav
  },
  created () {
    this.getCityInfo()
  },
  methods: {
    async getCityInfo () {
      const res = await getCityData()
      if (res.data.ret && res.data) {
        const cityInfo = res.data.data
        this.cities = cityInfo.cities
        this.hotCities = cityInfo.hotCities
      }
    }
  }
}
</script>
