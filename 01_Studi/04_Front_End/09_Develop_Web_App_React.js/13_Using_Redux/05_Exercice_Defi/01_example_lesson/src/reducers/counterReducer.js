const initialState = {
  counter: 0
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTER_INCREMENTED':
      return { ...state, counter: state.counter + 1 }
    case 'COUNTER_DECREMENTED':
      return { ...state, counter: state.counter - 1 }
    case 'COUNTER_INCRRANDOM':
      return {...state, counter: state.counter + action.payload}
    default:
      return state
  }
}
