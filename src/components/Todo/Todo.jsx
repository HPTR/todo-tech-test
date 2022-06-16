import React from 'react'
import './Todo.scss'

import InlineButton from '../InlineButton/InlineButton';

const Todo = (props) => {

  const { todo, handleCheck, handleDelete, todoId } = props;

  return (
    <div className='todo'>
      <ul className='todo__list'>
        <li className='todo__list-item'>
          <input className='todo__input' onChange={handleCheck} type="checkbox" />
          <span className='todo__text' >{todo}</span>
          <InlineButton className='todo__button' onClick={handleDelete} todoId={todoId} />
        </li>
      </ul>
    </div>
  )
}

export default Todo