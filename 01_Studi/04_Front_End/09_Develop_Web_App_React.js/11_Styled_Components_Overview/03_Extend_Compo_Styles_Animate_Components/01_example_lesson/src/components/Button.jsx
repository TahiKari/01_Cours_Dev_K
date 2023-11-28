import React from 'react'
import styled from 'styled-components'

export default function Button () {
  const Button = styled.button`
    background-color: ${({theme}) => props => (props.primary ? theme.primaryColor : theme.secondaryColor)};
    color: ${props => (props.primary ? 'white' : 'blue')};
    border: 1px solid blue;
    padding: 8px 16px;
    width: 20vw;
    height: 10vh;
    cursor: pointer;
    margin: 50px;

    &:hover {
      background-color: ${props => (props.primary ? 'darkblue' : 'lightblue')};
      color: white;
    }
  `
  const LargeButton = styled(Button)`
    width: 30vw;
    border-radius: 10px;
  `

  const Container = styled.div`
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border-radius: 15px;
    margin: 50px
  `

  return (
    <Container>
      <Button>Button</Button>
      <Button primary>Button Primary</Button>
      <LargeButton>Large Button</LargeButton>
    </Container>
  )
}
