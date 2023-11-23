import ClassComponents from "./components/ClassComponents.js";
import { useState } from 'react'

function App(){
    const [state, setState] = useState(0)
    const updateState = ()=>{
          	setState(10)
    }
    if(state >=10){
	          return <div>Compteur arrivé à 10</div>
    }
    return <ClassComponents initialValue = {state} updateState={updateState}/>
}
export default App;
