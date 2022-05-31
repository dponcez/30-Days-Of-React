import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button 
        className='btn primary--btn handle--change__btn' 
        onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button