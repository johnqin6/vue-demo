import Vue from 'vue'
import Vuex from 'vuex'
import singers from './mock/data/singers'

Vue.use(Vuex)

const types = {
  GETSINGERLIST: 'getSingerList'
}

const state = {
  singerList: []
}

const getters = {
  singerList: state => {
    return state.singerList
  }
}

const mutations = {
  [types.GETSINGERLIST] (state, singerList) {
    state.singerList = singerList
  }
}

const actions = {
  getSingerList ({ commit }) {
    commit(types.GETSINGERLIST, singers)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
