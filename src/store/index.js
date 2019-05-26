import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    updateHistory (state, data) {
      if (data) {
        // 修改
        for (let key in data) {
          Vue.set(state, key, data[key])
        }
        // 删除
        for (let key in state) {
          if (typeof data[key] === 'undefined') {
            Vue.delete(state, key)
          }
        }
      }
    },
    addCount (state) {
      state.count++
    }
  }
})

export default store
