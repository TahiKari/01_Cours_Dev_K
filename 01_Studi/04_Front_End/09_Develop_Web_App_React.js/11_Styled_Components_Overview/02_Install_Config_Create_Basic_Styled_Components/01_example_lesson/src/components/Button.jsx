import styled from 'styled-components'

export default function Button () {
  const Button = styled.button`
    background-color: ${props => (props.primary ? 'black' : 'red')};
    color: white;
    width: 20vw;
    height: 10vh;

    &:hover{
      background-color : ${props => props.primary ? 'darkblue' : 'lightblue'}
    }
  `
  return (
    <>
      <Button primary>Click Me</Button>
      <Button>Click Me</Button>
    </>
  )
}
