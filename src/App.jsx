import { useState } from 'react';
import './App.scss';

import ResetButton from './components/ResetButton/ResetButton'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const addTodo = (event) => {
    setTodos(prev => [...prev, input])
  }

  return (
    <div className="App">
      <h1>My Todos</h1>
      <ResetButton resetTodos={setTodos} />
      <AddTodo addTodo={addTodo} handleInputChange={handleInputChange} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
