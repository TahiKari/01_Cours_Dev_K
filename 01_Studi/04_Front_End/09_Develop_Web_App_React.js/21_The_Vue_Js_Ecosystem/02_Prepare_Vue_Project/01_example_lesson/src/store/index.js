import { createStore } from 'vuex'
import habits from './modules/habits.js'
import level from './modules/level.js'

export default createStore({
  modules: {
    habits,
    level
  }
})
