import Card from './components/Cards.js'
import { useState } from 'react'

function App () {
  const [rgbValue, setRgbValue] = useState('rgb(100,100,100)')
  const createRandomColor = ()=>{
    let r = Math.random() * 255,
    g = Math.random() *  255,
    b = Math.random() * 255
  
    setRgbValue(`rgb(${r},${g},${b})`)
  
  }
  return (
    //<>
      <Card id={1} rgbValue={rgbValue} createNewColor={createRandomColor}/>
      //<Card id={2} />
    //</>
  )
}

export default App
