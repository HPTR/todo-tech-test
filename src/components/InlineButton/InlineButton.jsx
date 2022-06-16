import React from 'react'
import './InlineButton.scss'

const InlineButton = (props) => {

  const { onClick, todoId, label, className } = props;

  return (
    <div>
      <button className={className} onClick={onClick} data-todoid={todoId} >{label}</button>
    </div>
  )
}

export default InlineButton