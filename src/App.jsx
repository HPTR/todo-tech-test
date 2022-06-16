import { useState } from 'react';
import './App.scss';
import './assets/sass/reset.scss';

import ResetButton from './components/ResetButton/ResetButton'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const addTodo = () => {
    setTodos(prev => [...prev, {
      id: prev[prev.length-1] ? prev[prev.length-1].id + 1 : 0,
      text: input
    }])
    setInput('')
  }

  const handleReset = () => {
    if (window.confirm('Do you want to delete all todos?')) {
      setTodos([])
    }
  }

  const handleCheck = (event) => {
    const todoText = event.target.nextSibling;
    if(event.target.checked) {
      todoText.style.textDecoration = 'line-through'
    } else {
      todoText.style.textDecoration = 'none'
    }
  }

  const handleDelete = (event) => {
    const removedItem = todos.filter(todo => Number(todo.id) !== Number(event.target.getAttribute('data-todoid')))
    setTodos(removedItem);
  }

  return (
    <div className="App">
      <h1>My Todos</h1>
      <ResetButton resetTodos={handleReset} />
      <AddTodo addTodo={addTodo} handleInputChange={handleInputChange} input={input} />
      <TodoList todos={todos} handleCheck={handleCheck} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
