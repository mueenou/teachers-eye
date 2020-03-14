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
  currentUser: {
    firstName: "",
    lastName: "",
    age: "",
    promos: [],
    status: "",
    userType: "",
    attitudePoints: null,
    warnings: null
  }
})

export const mutations = {
  SET_SNACKBAR_VALUE(state, payload) {
    console.log(payload)
    state.snackbar = payload.displaySb
    state.sbMessage = payload.message
    state.sbColor = payload.color
  },
  SET_CURRENT_USER(state, payload) {
    state.currentUser = payload
  }
}

export const actions = {
  handleSnackbar({ commit }, payload) {
    commit('SET_SNACKBAR_VALUE', payload);
  },
  handleCurrentUser({ commit }, payload) {
    commit('SET_CURRENT_USER', payload)
  }
} 