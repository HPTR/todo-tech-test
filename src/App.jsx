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

  }

  return (
    <div className="App">
      <h1>My Todos</h1>
      <ResetButton resetTodos={handleReset} />
      <AddTodo addTodo={addTodo} handleInputChange={handleInputChange} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
