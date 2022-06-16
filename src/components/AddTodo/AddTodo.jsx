import React from 'react'
import "./AddTodo.scss"

import TodoInput from '../TodoInput/TodoInput'
import InlineButton from '../InlineButton/InlineButton'

const AddTodo = (props) => {

  const {addTodo} = props;

  return (
    <div>
      <TodoInput />
      <InlineButton addTodo={addTodo} />
    </div>
  )
}

export default AddTodo