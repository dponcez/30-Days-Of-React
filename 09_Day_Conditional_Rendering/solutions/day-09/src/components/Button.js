import React from 'react'

const Button = ({buttonStyle, text, onClick}) => {
  return (
    <button 
        style={buttonStyle}
        onClick={onClick}>
        {text}
    </button>
  )
}

export default Button