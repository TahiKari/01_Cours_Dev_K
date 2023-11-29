import { useState, useEffect, useMemo } from 'react'

export default function FunctionComponent (props) {
  const [state, setState] = useState(props.value)
  const [boolean, setBoolean] = useState(false)

  useEffect(() => {
    console.log('Composant monté')
    return () => {
      console.log('Composant va être démonté')
    }
  }, [])

  useEffect(
    () => {
      console.log('Composant mise a jour')

      /*setState(props.value)*/ /* ou en version destructuring */ setState(
        props.value
      )
    },
    /*[props.value]*/ /* ou en version destructuring */ [props.value]
  )

  useEffect(() => {
    console.log('composant mis à jour')

    if (props.value === 5) {
      setBoolean(true)
    }

    setState(props.value)
  }, [props.value])

  const memoValue = useMemo(() => state + 10, [state])
  const memoValue2 = useMemo(() => state, [boolean])

  return (
    <>
      <h1>Salut Comment tu ?</h1>
      <h2>{state}</h2>
      <h2>{memoValue}</h2>
      <h2>{memoValue2}</h2>
    </>
  )
}
