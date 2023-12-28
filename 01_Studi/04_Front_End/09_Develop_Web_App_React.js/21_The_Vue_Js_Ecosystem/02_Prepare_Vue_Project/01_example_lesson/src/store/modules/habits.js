const state = () => ({
  habits: [
    {
      id: 1,
      name: "Faire de l'exercice",
      progressPlus: 0,
      progressMinus: 0
    },
    {
      id: 2,
      name: 'Arrêter de fumer',
      progressPlus: 0,
      progressMinus: 0
    },
    {
      id: 3,
      name: 'Manger plus de légumes',
      progressPlus: 0,
      progressMinus: 0
    }
  ]
})

const getters = {
  getHabitById: state => habitId => {
    return state.habit.find(habit => habit.id === habitId)
  },
  getAllHabits: state => () => {
    return state.habits
  }
}

const actions = {
  addHabit ({ commit }, habit) {
    commit('addHabit', habit)
  },
  incrementHabitProgress ({ commit, dispatch }, { habitId }) {
    commit('incrementHabitProgress', { habitId })
    dispatch('addExperiencePoints', 5)
  },
  decrementHabitProgress ({ commit, dispatch }, { habitId }) {
    commit('decrementHabitProgress', { habitId })
    dispatch('removeExperiencePoints', 5)
  },
  deleteHabit ({ commit }, { habitId }) {
    commit('deleteHabit', { habitId })
  }
}

const mutation = {
  addHabit: (state, habit) => state.habits.push(habit),
  incrementHabitProgress: (state, { habitId }) => {
    const habit = state.habits.find(habit => habit.id === habitId)
    if (habit) {
      habit.progressPlus += 1
    }
  },
  decrementHabitProgress: (state, { habitId }) => {
    const habit = state.habits.find(habit => habit.id === habitId)
    if (habit) {
      habit.progressMinus += 1
    }
  },
  deleteHabit: (state, { habitId }) => {
    const habit = state.habits.find(habit => habit.id === habitId)
    if (habit) {
      const index = state.habits.indexOf(habit)
      state.habit.splice(index, 1)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutation
}
