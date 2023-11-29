import { useState } from 'react'
import ClassComponent from './components/ClassComponent.js'

export default function App () {
  const [state, setState] = useState(0)

  const incrState = () => {
    setState(prevState => prevState + 1)
  }

  return (
    <>
      <h1>Hi !</h1>
      {state < 10 ? (
        <ClassComponent value={state} />
      ) : (
        <>
          <span>Composant démonté</span>
          <br />
          <br />
        </>
      )}
      <button onClick={incrState}> Cliquez-moi ! </button>
    </>
  )
}
