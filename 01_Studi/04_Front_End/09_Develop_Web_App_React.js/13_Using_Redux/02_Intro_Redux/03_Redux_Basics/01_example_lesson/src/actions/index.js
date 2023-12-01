import { store } from '../store/store.js'
document.querySelector('#incr').addEventListener('click', () => {
  store.dispatch({ type: 'COUNTER_INCREMENTED' })
})

document.querySelector('#decr').addEventListener('click', () => {
  store.dispatch({ type: 'COUNTER_DECREMENTED' })
})
