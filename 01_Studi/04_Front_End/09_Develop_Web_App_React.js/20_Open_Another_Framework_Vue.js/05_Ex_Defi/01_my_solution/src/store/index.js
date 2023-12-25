import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    addTask (state, task) {
      state.tasks.push(task)
    },
    toggleTask (state, taskIndex) {
      state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed
    },
    removeTask (state, taskIndex) {
      state.tasks.splice(taskIndex, 1)
    }
  },
  getters: {
    completedTasks (state) {
      return state.tasks.filter(task => task.completed).length
    },
    allTasks (state) {
      return state.tasks
    }
  }
})
