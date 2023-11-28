import styled from 'styled-components'

export default function Title () {
  const Title = styled.h1`
    color: blue;
    font-size: 50px;
  `

  return (
    <div>
      <Title>Bonjour styled-components</Title>
    </div>
  )
}
