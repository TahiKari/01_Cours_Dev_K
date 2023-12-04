import './App.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { randomColor } from './redux/colorSlice'
import Counter from './Counter'
import User from './User.jsx'

function App() {

  const color = useSelector(state => state.reducer.color.value)
  const dispatch = useDispatch()

  useEffect(()=>{
    document.querySelector('body').style.backgroundColor = color
  },[color])

  return (
    <div>
      <button onClick={()=> { dispatch(randomColor()) }}>Changer Couleur</button>
      <Counter/>
      <User/>
    </div>
  )
}

export default App