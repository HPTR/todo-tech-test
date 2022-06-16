import React from 'react'
import './Todo.scss'

import InlineButton from '../InlineButton/InlineButton';

const Todo = (props) => {

  const { todo, handleCheck, handleDelete, todoId } = props;

  return (
    <div className='todo'>
      <ul className='todo__list'>
        <li className='todo__list-item'>
          <div className="todo__item">
            <input className='todo__checkbox' onChange={handleCheck} type="checkbox" />
            <span className='todo__text' >{todo}</span>
          </div>
          <InlineButton label={'Delete'} className='todo__button' onClick={handleDelete} todoId={todoId} />
        </li>
      </ul>
    </div>
  )
}

export default Todo