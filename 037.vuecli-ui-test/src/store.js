import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vue_count: 0
  },
  mutations: {
    increment (state) {
      state.vue_count++
    },
    decrement (state) {
      state.vue_count--
    }
  },
  actions: {

  }
})
