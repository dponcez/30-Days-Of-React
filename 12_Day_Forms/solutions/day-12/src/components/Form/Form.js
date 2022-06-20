import React from 'react'
import Validation from './Validation/Validation'

const Form = () => {
  return (
    <div className='form--container'>
      <form className='form'>
        <Validation/>
      </form>
    </div>
  )
}

export default Form