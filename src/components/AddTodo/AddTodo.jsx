import React from 'react'
import "./AddTodo.scss"

import InlineButton from '../InlineButton/InlineButton'

const AddTodo = (props) => {

  const {addTodo, handleInputChange, input} = props;

  return (
    <div className='add-todo'>
      <input className='add-todo__input' type='text' onChange={handleInputChange} value={input} />
      <InlineButton label='Add' className='add-todo__button' onClick={addTodo} />
    </div>
  )
}

export default AddTodo