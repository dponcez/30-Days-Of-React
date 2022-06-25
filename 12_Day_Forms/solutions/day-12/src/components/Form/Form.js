import React, { useState, useEffect } from 'react'
import FormGroup from './formGroup'
import state from '../../utils/states'
import '../../styles/Form.scss'

const Form = () => {
  const [userData, setUserData] = useState(state)

  const handleSubmit = (e) => {
    e.preventDefault()
    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills
    } = userData;

    const formattedSkills = [];
    for(const key in skills){
      console.log(key)
      if(skills[key]) formattedSkills.push(key.toUpperCase())
    }

    const data = {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills: formattedSkills
    }

    // this is the place where we connect backend api to send the data to the database
    console.log(data)
  }

  useEffect(() => {
    setUserData((initialState) => {
      return { ...initialState }
    })
  }, [])
  
  return(
    <div className='form--container'>
      <h3>add student</h3>
      <form className='form' onSubmit={handleSubmit} noValidate>
        <FormGroup state={userData}/>
        <div>
          <button className='btn'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form