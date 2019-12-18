export const state = () => ({
  member: []
})

export const mutations = {
  init(state, member) {
    state.member = member
  },
  add(state, payload) {
    state.member.push({
      key: state.member.length,
      title: payload.title,
      explain: payload.explain,
      created: this.$moment().format('YYYY/MM/DD HH:mm:ss')
    })
  }
}

export const actions = {
  async init(context) {
    const result = await this.$axios.$get('/store.json') || []
    context.commit('init', result)
  }
}