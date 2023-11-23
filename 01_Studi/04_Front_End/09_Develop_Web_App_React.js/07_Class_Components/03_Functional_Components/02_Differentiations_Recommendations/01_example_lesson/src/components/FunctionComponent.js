import { useEffect, useState } from 'react'

export default function FunctionComponent (props) {
  const [count, setCount] = useState(props.initialValue)
  useEffect(() => {
    console.log('composant monté')
    return () => {
      console.log('composant va être démonté')
    }
  }, [])

  useEffect(() => {
    console.log('le count a été mis à jour')
  }, [count])

  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <h1>Mon composant de type fonction</h1>
      <p>Ce composant utilise la syntaxe des composants fonctionnels</p>
      <p>Compteur : {count}</p>
      <button onClick={handleClick}> Incrémenter le compteur</button>
    </div>
  )
}
