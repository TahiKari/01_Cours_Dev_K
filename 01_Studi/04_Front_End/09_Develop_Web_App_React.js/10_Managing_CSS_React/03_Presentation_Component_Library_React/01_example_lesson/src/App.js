import Children from './Children.js'
import './styles/App.css'

export default function App () {
  const styles = {
    backgroundColor: '#22223B',
    border: '3px solid #9A8C98',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '20px'
  }

  return (
    <>
      <div style={styles}>
        <h2 className='title'>Hi React !</h2>
        <p className='para'>Je suis le paragrtaphe du composant App</p>
      </div>
      <Children />
    </>
  )
}
