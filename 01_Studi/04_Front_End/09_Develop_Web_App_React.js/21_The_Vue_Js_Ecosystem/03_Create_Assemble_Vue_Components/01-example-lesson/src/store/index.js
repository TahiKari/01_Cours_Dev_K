import { createStore } from 'vuex'
import habits from './modules/habits'
import level from './modules/level'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    habits,
    level
  }
})
