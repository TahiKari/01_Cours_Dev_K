const state = () => ({
  level: 1,
  experiencePoints: 0
})
// getters
const getters = {
  progressPercentage: state =>
    Math.floor((state.experiencePoints / (100 * state.level)) * 100),
  level: state => state.level,
  experiencePoints: state => state.experiencePoints
}
// actions
const actions = {
  addExperiencePoints ({ commit, state }, points) {
    commit('incrementExperiencePoints', points)
    if (state.experiencePoints >= 100) {
      commit('levelUp')
    }
  },
  removeExperiencePoints ({ commit, state }, points) {
    commit('removeExperiencePoints', points)
    if (state.experiencePoints <= 0) {
      commit('levelDown')
    }
  }
}
// mutations
const mutations = {
  incrementExperiencePoints (state, points) {
    state.experiencePoints += points
  },
  removeExperiencePoints (state, points) {
    let newPoints = state.experiencePoints - points
    if (newPoints < 0) {
      newPoints = 0
    }
    state.experiencePoints = newPoints
  },
  levelUp (state) {
    state.level++
    state.experiencePoints = 0
  },
  levelDown (state) {
    state.level--
    if (state.level < 0) {
      state.level = 0
      state.experiencePoints = 0
    } else {
      state.experiencePoints = 99
    }
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
