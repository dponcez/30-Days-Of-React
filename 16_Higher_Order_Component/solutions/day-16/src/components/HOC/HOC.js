import React from 'react'
import SubmitButton from '../SubmitButton/SubmitButton'

const HOC = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='form--container'>
      <form className='form' onSubmit={handleSubmit}>

        <SubmitButton
          type='button'
          text='Submit'
        />
      </form>
    </div>
  )
}

export default HOC