export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}

export const state = () => ({
  users: [],
  snackbar: false,
  sbMessage: "",
  sbColor: "",
  currentUser: {
    token: "",
    firstName: "",
    lastName: "",
    age: "",
  },
  isAuthenticated: false,
})



export const mutations = {
  LOGOUT_USER(state) {
    window.localStorage.clear('currentUser')
    state.currentUser = {
      token: "",
      firstName: "",
      lastName: "",
      age: "",
    },
    state.isAuthenticated = false
  },
  SET_CURRENT_USER(state, response) {
    state.isAuthenticated = true
    console.log('user', state.currentUser)
    window.localStorage.currentUser = JSON.stringify(response)
    console.log('parsed user', JSON.parse(window.localStorage.currentUser))
    state.currentUser = JSON.parse(window.localStorage.currentUser)
  },
  SET_SNACKBAR_VALUE(state, payload) {
    console.log(payload)
    state.snackbar = payload.displaySb
    state.sbMessage = payload.message
    state.sbColor = payload.color
  }
}

export const actions = {
  logoutUser({ commit }) {
    commit('LOGOUT_USER')
  },
  async loginUser({ commit }, loginInfos) {
    try {
      let response = await this.$axios.$post('http://localhost:5000/api/auth/user/signin', loginInfos)
      commit('SET_CURRENT_USER', response)
      return response
    } catch (error) {
      return { error: 'Combination non correcte' }
    }
  },
  async signupUser({ commit }, signupInfos) {
    try {
      let response = await this.$axios.$post('http://localhost:5000/api/auth/user/signup', signupInfos)
      console.log(response)
      commit('SET_CURRENT_USER', response)
      return response
    } catch (error) {
      return { error: "Form non correcte" }
    }
  },
  handleSnackbar({ commit }, payload) {
    commit('SET_SNACKBAR_VALUE', payload);
  }
} 