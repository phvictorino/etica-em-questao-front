const state = {
  loading: false
}

const mutations = {
  start (state) {
    state.loading = true
  },

  stop (state) {
    state.loading = false
  }
}

const actions = {
  async start (context) {
    await context.commit('start')
  },

  async stop (context) {
    await context.commit('stop')
  }
}

const getters = {
  isLoading (state) {
    return state.loading
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
