import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TodoList ({ todos }) {
  const [newTodo, setNewTodo] = useState('')
  const [list, setList] = useState(todos)

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setList([...list, { text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  const handleCompleteTodo = index => {
    const newList = [...list]
    newList[index].completed = !newList[index].completed
    setList(newList)
  }

  const handleDeleteTodo = index => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {list.map((todo, index) => (
          <li key={index}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => handleCompleteTodo(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type='text'
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  )
}

export default TodoList
