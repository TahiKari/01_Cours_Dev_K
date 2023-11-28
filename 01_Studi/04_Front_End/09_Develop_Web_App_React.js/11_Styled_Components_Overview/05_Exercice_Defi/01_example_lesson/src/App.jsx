import './App.css'
import Title from './components/Titles.jsx'
import Button from './components/Button.jsx'
import { ThemeProvider } from 'styled-components'

function App () {
  const theme = {
    primaryColor: 'gray',
    secondaryColor: 'orange',
    textColor: 'green'
  }

  return (
    <ThemeProvider theme={theme}>
      <Title />
      <Button />
    </ThemeProvider>
  )
}

export default App
