import Header from './components/Header.js'
import './App.css'

function App () {
  // Composant non imbriqué
  //return <Header />
  // Composant imbriqué et fragment
  /*return (
    <><Header>
      <Titre />
      <Logo />
    </Header></>
    
  )*/
  return (
    <>
      <Header />
      <Header />
      <Header />
      <Header />
    </>
  )
}

export default App
