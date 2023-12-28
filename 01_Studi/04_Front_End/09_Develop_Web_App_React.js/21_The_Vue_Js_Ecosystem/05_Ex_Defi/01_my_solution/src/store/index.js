import { createStore } from 'vuex'
export default createStore({
  state: {
    items: []
  },
  mutations: {
    addItem (state, item) {
      state.items.push(item)
    },
    toggleItem (state, itemIndex) {
      state.items[itemIndex].purchased = !state.items[itemIndex].purchased
    },
    removeItem (state, itemIndex) {
      state.items.splice(itemIndex, 1)
    }
  },
  getters: {
    purchasedItems (state) {
      return state.items.filter(item => item.purchased)
    },
    allItems (state) {
      return state.items
    }
  }
})
