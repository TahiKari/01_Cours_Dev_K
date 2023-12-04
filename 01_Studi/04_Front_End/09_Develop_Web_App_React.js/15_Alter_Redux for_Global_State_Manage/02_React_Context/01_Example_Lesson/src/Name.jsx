import { nameContext } from './App'
import { useContext } from 'react'

export default function Name () {
  const name = useContext(nameContext)
  return <span>{name}</span>
}
