import React, { Component } from 'react'
import FormGroup from './formGroup'
class Form extends Component {
  constructor(props){
    super(props)
  }

  handleSubmit = (e) => {
    // stops the default behavior of form element
    // specifically refreshing of page
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
    } = this.props

    const formattedSkills = []

    for( const key in skills ){
      console.log(key)
      if(skills[key]){
        formattedSkills.push(key.toUpperCase())
      }
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
  render(){
    return (
      <div className='form--container'>
        <h3>add student</h3>
        <form className='form' onSubmit={this.handleSubmit} noValidate>
          <FormGroup/>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form