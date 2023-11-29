import { useState, useEffect, useMemo } from 'react'

export default function FunctionComponent /*(props)*/ /*ou en version destructuring*/ ({ value }) {
  const [state, setState] = /*useState(props.value)*/ /* ou en version destructuring */ useState(value)

  useEffect(() => {
    console.log('Composant monté')
    return () => {
      console.log('Composant va être démonté')
    }
  },[])

  useEffect(() => {
    console.log('Composant mise a jour')

    /*setState(props.value)*/ /* ou en version destructuring */ setState(value)
  },/*[props.value]*/ /* ou en version destructuring */ [value])

  const memoValue = useMemo(() => state + 10, [state])

  return (
    <>
      <h1>Salut Comment tu ?</h1>
      <h2>{state}</h2>
      <h2>{memoValue}</h2>
    </>
  )
}
