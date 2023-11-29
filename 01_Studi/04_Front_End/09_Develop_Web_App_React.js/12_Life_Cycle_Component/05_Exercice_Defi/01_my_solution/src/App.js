import { useState } from 'react'
/*import ClassComponent from './components/ClassComponent.js'*/
import FunctionComponent from './components/FunctionComponent.js'

export default function App () {
  const [state, setState] = useState(0)

  const incrState = () => {
    setState(prevState => prevState + 1)
  }

  return (
    <>
      {state < 10 ? (
        <FunctionComponent value={state} />
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
