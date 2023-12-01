import './index.css'
import { store } from './store/store.js'
import './actions/index.js'

const counterContainer = document.querySelector('#counter')
const render = () => {
  const state = store.getState()

  counterContainer.innerHTML = state.counter
}

render()

store.subscribe(render)


