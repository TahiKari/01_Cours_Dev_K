import FunctionComponent from './components/FunctionComponent'
import { useState } from 'react'
function App(){
       const [state, setState] = useState(0)
       const updateState = ()=>{
	         setState(10)
       }
       if(state >=10){
	         return <div>Compteur arrivé à 10</div>
      }
      return <FunctionComponent initialValue = {state}/>
      // <ClassComponent initialValue = {state} updateState={updateState}/>
}

export default App;
