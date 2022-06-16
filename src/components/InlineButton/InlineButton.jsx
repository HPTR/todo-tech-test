import React from 'react'
import './InlineButton.scss'

const InlineButton = (props) => {

  const { onClick, todoId, label } = props;

  return (
    <div>
      <button onClick={onClick} data-todoid={todoId} >{label}</button>
    </div>
  )
}

export default InlineButton