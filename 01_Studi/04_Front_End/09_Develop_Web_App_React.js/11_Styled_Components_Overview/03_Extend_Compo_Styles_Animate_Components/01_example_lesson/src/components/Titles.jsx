import styled from 'styled-components'

export default function Title () {
  const Title = styled.h1`
    text-align: center;
    color: ${({theme}) => theme.textColor};
    font-size: 50px;
  `

  return (
    <div>
      <Title>Bonjour, styled-Components</Title>
    </div>
  )
}
