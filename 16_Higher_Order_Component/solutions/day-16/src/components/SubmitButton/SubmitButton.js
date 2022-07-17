import React from 'react'
import '../../styles/SubmitButton.scss'

const SubmitButton = ({type, text}) => {
  return (
    <button
      className='btn'
      type={type}
    >
      {text}
    </button>
  )
}

export default SubmitButton