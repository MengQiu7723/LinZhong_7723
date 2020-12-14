import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      alias: '',
      birth: '',
      email: '',
      gender: '',
      headImage: '',
      id: '',
      idCardNum: '',
      level: '',
      mobile: '',
      name: '',
      password: '',
      region: '',
      token: '',
      username: ''
    }
  },
  mutations: {
    userUpdate (state, userInfo) {
      state.userInfo = userInfo
      window.sessionStorage.setItem('username', userInfo.username)
      window.sessionStorage.setItem('userid', userInfo.id)
    }
  },
  actions: {
  },
  modules: {
  }
})
