// import { createStore } from 'vuex'
import { login as loginApi } from '@/api/login'
import { setTokenTime } from '@/utils/auth'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || '',
    siderType: true
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    changeSiderType(state) {
      state.siderType = !state.siderType
    }
  },
  actions: {
    // 登录
    async login({ commit }, userInfo: any) {
      const res: any = await loginApi(userInfo)
      console.log('login', res)
      console.log('router', router)
      if (res.token) {
        commit('setToken', res.token)
        // 记录登录时间戳
        setTokenTime()
        router.replace('/')
      } else {
        console.log('接口异常了!')
      }
    },
    // 登出
    logout({ commit }) {
      commit('setToken', '')
      localStorage.clear()
      router.replace('/login')
    }
  },
  modules: {}
}
