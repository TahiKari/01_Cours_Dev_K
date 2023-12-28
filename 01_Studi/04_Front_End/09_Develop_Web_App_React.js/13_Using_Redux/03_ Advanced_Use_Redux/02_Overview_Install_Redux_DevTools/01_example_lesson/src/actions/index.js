import { store } from '../store/store.js'
document.querySelector('#incr').addEventListener('click', () => {
  store.dispatch({ type: 'COUNTER_INCREMENTED' })
})

document.querySelector('#decr').addEventListener('click', () => {
  store.dispatch({ type: 'COUNTER_DECREMENTED' })
})

document.querySelector('#changeColor').addEventListener('click', () => {
  let randomColor = `rgb(${Math.random() * 255},${Math.random() * 255},${
    Math.random() * 255
  })`
  store.dispatch({ type: 'COLOR_CHANGED', payload: randomColor })
})