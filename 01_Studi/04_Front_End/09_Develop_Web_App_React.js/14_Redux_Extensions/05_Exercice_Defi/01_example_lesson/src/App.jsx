import './App.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { randomColor } from './redux/colorSlice'
import Counter from './Counter'

function App() {

  const color = useSelector(state => state.reducer.color.value)
  const dispatch = useDispatch()

  useEffect(()=>{
    document.querySelector('body').style.backgroundColor = color
  },[color])

  return (
    <>
      <button onClick={()=> { dispatch(randomColor()) }}>Changer Couleur</button>
      <Counter/>
    </>
  )
}

export default App