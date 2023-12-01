import './index.css'
import { store } from './store/store.js'
import './actions/index.js'

const counterContainer = document.querySelector('#counter')
const body = document.querySelector('body')
const render = () => {
  const { counter, color } = store.getState()
  counterContainer.innerHTML = counter.counter
  body.style.backgroundColor = color.color
}

render()

store.subscribe(render)
