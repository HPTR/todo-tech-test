import React from 'react'
import './InlineButton.scss'

const InlineButton = (props) => {

  const {addTodo} = props;

  return (
    <div>
      <button onClick={addTodo}>Plus</button>
    </div>
  )
}

export default InlineButton