import React from 'react'
import './ResetButton.scss'

const ResetButton = (props) => {

  const {resetTodos} = props

  return (
    <div>
      <button className='reset-button' onClick={resetTodos} >Reset</button>
    </div>
  )
}

export default ResetButton