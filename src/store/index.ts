import { createStore } from 'vuex'
import app from './modules/app'
import getters from './getters'

export default createStore({
  // state: () => ({
  //   a: 1
  // }),
  // mutations: {},
  // actions: {},
  getters,
  modules: {
    app
  }
})
