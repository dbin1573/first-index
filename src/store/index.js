// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//       name: ''
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store