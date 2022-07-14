import React from 'react'

const SubmitButton = ({style, type, text}) => {
  return (
    <button
      style={style}
      type={type}
    >
      {text}
    </button>
  )
}

export default SubmitButton