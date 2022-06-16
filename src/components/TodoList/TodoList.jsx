import React from 'react'
import './TodoList.scss'

import Todo from '../Todo/Todo'

const TodoList = (props) => {

  const { todos, handleCheck, handleDelete } = props;

  return (
    <div className='todo-list'>
      {Object.values(todos).map((todo, index) => <Todo key={todo.id} todoId={todo.id} todo={todo.text} handleCheck={handleCheck} handleDelete={handleDelete} />)}
    </div>
  )
}

export default TodoList