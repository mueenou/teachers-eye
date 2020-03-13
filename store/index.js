export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}

export const state = () => ({
  snackbar: false,
  sbMessage: "",
  sbColor: "",
})

export const mutations = {
  SET_SNACKBAR_VALUE(state, payload) {
    console.log(payload)
    state.snackbar = payload.displaySb
    state.sbMessage = payload.message
    state.sbColor = payload.color
  }
}

export const actions = {
  handleSnackbar({ commit }, payload) {
    commit('SET_SNACKBAR_VALUE', payload);
  }
} 