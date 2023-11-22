import ReactLogo from '../logo.svg'
import '../styles/header.css'

export default function Header () {
  return (
    <header className='headerContainer'>
      <h1>Les composants React</h1>
      <img src={ReactLogo} alt='Logo React' />
    </header>
  )
}
