import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counterSlice.js'

export default function Counter () {
  const count = useSelector(state => state.reducer.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>
        Incrémenté le compteur
      </button>
      <button onClick={() => dispatch(decrement())}>Décrementé le compteur</button>
    </div>
  )
}
