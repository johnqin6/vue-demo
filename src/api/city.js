import axios from 'axios'

const CITIES_INFO = 'https://www.easy-mock.com/mock/5b574c739a5ff5320380791b/tuniu/citiesInfo'
export const getCityData = () => new Promise(resolve => {
  axios.get(CITIES_INFO)
    .then(res => resolve(res))
})
