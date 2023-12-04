import { createContext } from 'react'
import './App.css'
import User from './User'

export const nameContext = createContext('name')

function App () {
  return (
    <nameContext.Provider value={'John'}>
      <User />
    </nameContext.Provider>
  )
}
export default App
