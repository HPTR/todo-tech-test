import React from 'react'
import './InlineButton.scss'

const InlineButton = (props) => {

  const { onClick, todoId } = props;

  return (
    <div>
      <button onClick={onClick} data-todoid={todoId} >Plus</button>
    </div>
  )
}

export default InlineButton