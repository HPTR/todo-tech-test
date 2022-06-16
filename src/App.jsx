import { useState } from 'react';
import './App.css';

import ResetButton from './components/ResetButton/ResetButton'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {

  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <h1>My Todos</h1>
      <ResetButton resetTodos={setTodos} />
      <AddTodo addTodo={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
