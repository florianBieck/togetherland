import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      profilePic: '',
      verified: false,
      loggedIn: false
    }
  },
  mutations: {
    setProfilePic (state, profilePic) {
      state.user.profilePic = profilePic
    },
    setUserVerified (state, verified) {
      state.user.verified = verified
    },
    setLoggedIn (state, loggedIn) {
      state.user.loggedIn = loggedIn
    }
  },
  actions: {

  }
})
