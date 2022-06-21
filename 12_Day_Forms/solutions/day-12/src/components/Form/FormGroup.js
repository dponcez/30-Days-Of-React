import React, { Component } from 'react'
import selectCountries from '../../utils/selectCountries'

// Mapping the object list
const selectOptions = selectCountries.map(({value, label}) => (
  <select key={value} value={value}>{label}</select>
))

class FormGroup extends Component {
  // declaring state variable
  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false
    },
    touched: {
      firstName: false,
      lastName: false
    }
  }

  handleChange = (e) => {
    // we can get the name and value like: e.target.name, e.target.value,
    // we can also desctructure name and value from e.target
    // const name = e.target.name
    // const value = e.target.value
    const { name, value, type, checked } = e.target;

    if(type === 'checkbox'){
      this.setState({
        skills: {...this.state.skill, [name]: checked}
      })
    }else if(type === 'file'){
      this.setState({ [name]: e.target.files[0]})
    }else{
      this.setState({ [name]: value })
    }
  }

  handleBlur = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state.checked, [name]: true })
  }

  validate = () => {
    const error = {
      firstName: ''
    }

    if((this.state.touched.firstName && this.state.firstName < 3) ||
      (this.state.touched.firstName && this.state.firstName > 12)
    ){
      error.firstName = 'First name must be 2 between 12'
    }

    return error
  }
  
  render(){
    const { firstName } = this.validate()
    return(
      <>
        <div className='row'>
          <div className='form--group'>
            <label htmlFor='firstName'>first name</label>
            <input
              type='text'
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder='Type your first name'
            />
            <small>{ firstName }</small>
          </div>
          <div className='form--group'>
            <label htmlFor='lastName'>last name</label>
            <input
              type='text'
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder='Type your last name'
            />
          </div>
          <div className='form--group'>
            <label htmlFor='email'>email</label>
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              placeholder='Type your email'
            />
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='tel'>Telephone </label>
          <input
            type='tel'
            name='tel'
            value={this.state.tel}
            onChange={this.handleChange}
            placeholder='Tel'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='dateOfBirth'>Date of birth </label>
          <input
            type='date'
            name='dateOfBirth'
            value={this.state.dateOfBirth}
            onChange={this.handleChange}
            placeholder='Date of Birth'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='favoriteColor'>Favorite Color</label>
          <input
            type='color'
            id='favoriteColor'
            name='favoriteColor'
            value={this.state.favoriteColor}
            onChange={this.handleChange}
            placeholder='Favorite Color'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='weight'>Weight </label>
          <input
            type='number'
            id='weight'
            name='weight'
            value={this.state.weight}
            onChange={this.handleChange}
            placeholder='Weight in Kg'
          />
        </div>
        <div className='selection'>
          <label htmlFor='country'>Country</label> <br />
          <select name='country' onChange={this.handleChange} id='country'>
            {selectOptions}
          </select>
        </div>

        <div className='gender'>
          <p>Gender</p>
          <div>
            <input
              type='radio'
              id='female'
              name='gender'
              value='Female'
              onChange={this.handleChange}
              checked={this.state.gender === 'Female'}
            />
            <label htmlFor='female'>Female</label>
          </div>
          <div>
            <input
              id='male'
              type='radio'
              name='gender'
              value='Male'
              onChange={this.handleChange}
              checked={this.state.gender === 'Male'}
            />
            <label htmlFor='male'>Male</label>
          </div>
          <div>
            <input
              id='other'
              type='radio'
              name='gender'
              value='Other'
              onChange={this.handleChange}
              checked={this.state.gender === 'Other'}
            />
            <label htmlFor='other'>Other</label>
          </div>
        </div>

        <div className='skills'>
          <p>Select your skills</p>
          <div>
            <input
              type='checkbox'
              id='html'
              name='html'
              onChange={this.handleChange}
            />
            <label htmlFor='html'>HTML</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='css'
              name='css'
              onChange={this.handleChange}
            />
            <label htmlFor='css'>CSS</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='javascript'
              name='javascript'
              onChange={this.handleChange}
            />
            <label htmlFor='javascript'>JavaScript</label>
          </div>
        </div>
        <div className='bio'>
          <label htmlFor='bio'>Bio</label> <br />
          <textarea
            id='bio'
            name='bio'
            value={this.state.bio}
            onChange={this.handleChange}
            cols='120'
            rows='10'
            placeholder='Write about yourself ...'
          />
        </div>

        <div className='file'>
          <input type='file' name='file' onChange={this.handleChange} />
        </div>
      </>
    )
  }

}

export default FormGroup