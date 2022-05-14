import React from 'react'
import '../styles/design.css'

const Button = ({subscribe, onClick}) => (
  <button 
      className='subscribe--btn' 
      onClick={onClick}
  >
    {subscribe}
  </button>
)

const Form = ({handleSubmit}) => {
  return (
    <form className='subscribe--form'>
      <div className='input--container'>
        <input type="text" name="fname" placeholder="Full name"/>
        <input type="text" name="lname" placeholder="Last name"/>
        <input type="email" name="email" placeholder="Email"/>
      </div>
      <Button
        subscribe='Subscribe'
        onClick={handleSubmit}
      />
    </form>
  )
}

const Design = ({text, subscribe, handleSubmit}) => {
  return (
    <article className="background">
      <div className='subscribe--container'>
        <h1 className='subscribe'>{subscribe}</h1>
        <p className='text'>{text}</p>
        <Form 
          onSubmit={(e) => e.preventDefault()}
          handleSubmit={handleSubmit}
        />
      </div>
    </article>
  )
}

export default Design