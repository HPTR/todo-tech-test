import React from 'react'
import "./AddTodo.scss"

import InlineButton from '../InlineButton/InlineButton'

const AddTodo = (props) => {

  const {addTodo, handleInputChange} = props;

  return (
    <div>
      <input type='text' onChange={handleInputChange} />
      <InlineButton addTodo={addTodo} />
    </div>
  )
}

export default AddTodo