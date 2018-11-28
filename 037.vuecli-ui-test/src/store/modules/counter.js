export default {
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  actions: {
    plusCount ({commit}) {
      commit('increment')
    }
  },
  getters: {
    currentCount (state) {
      return state.count
    }
  }
}
