import React from 'react'
import styled from 'styled-components'

export default function Button () {
  const Button = styled.button`
    background-color: ${props => (props.primary ? 'green' : 'blue')};
    color: white;
    border-radius: 5px;
  `
  
  return (
    <>
      <Button>Button</Button>
    </>
  )
}
