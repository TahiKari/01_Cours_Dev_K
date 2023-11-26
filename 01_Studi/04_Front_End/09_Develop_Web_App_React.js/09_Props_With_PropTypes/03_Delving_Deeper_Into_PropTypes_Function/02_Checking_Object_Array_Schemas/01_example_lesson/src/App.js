import TodoList from './components/TodoList.js'
import './App.css'

function App () {
  return (
    <div className='App'>
      <h1>Bienvenue sur notre site</h1>
      <TodoList
        todos={[
          { text: 'Learn React', completed: true },
          { text: 'Learn Javascript', completed: false }
        ]}
      />
    </div>
  )
}

export default App
