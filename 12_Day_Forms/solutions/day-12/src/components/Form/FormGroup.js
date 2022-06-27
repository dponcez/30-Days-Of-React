import React, { useState } from 'react'
import selectCountries from '../../utils/selectCountries'
import '../../styles/FormGroup.scss'

// Mapping the object list
const selectOptions = selectCountries.map(({value, label}) => (
  <option key={value} value={value}>{label}</option>
))

const FormGroup = ({state}) => {
  const [userState, setUserState] = useState(state)

  const handleChange = (e) => {
    // we can get the name and value using: e.target.name, e.target.value,
    // we can also destructure name and value from e.target
    // const name = e.target.name
    // const value = e.target.value
    const { name, value, type, checked } = e.target;

    if(type === 'checkbox'){
      setUserState({
        skills: { ...userState.skills, [name]: checked }
      })
    }else if(type === 'file'){
      setUserState({ [name]: e.target.files[0]})
    }else{
      setUserState({ [name]: value })
    }
    
  }

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setUserState({ ...userState.checked, [name]: true })
  }

  return(
    <>
      <div className='row'>
        <div className='form--group'>
          <label htmlFor='firstName'>First name</label>
          <input
            type='text'
            name='firstName'
            value={userState.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Type your first name'
          />
        </div>
        <div className='form--group'>
          <label htmlFor='lastName'>Last name</label>
          <input
            type='text'
            name='lastName'
            value={userState.lastName}
            onChange={handleChange}
            placeholder='Type your last name'
          />
        </div>
        <div className='form--group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={userState.email}
            onChange={handleChange}
            placeholder='Type your email'
          />
        </div>
      </div>
      <div className='form--group'>
        <label htmlFor='tel'>Telephone </label>
        <input
          type='tel'
          name='tel'
          value={userState.tel}
          onChange={handleChange}
          placeholder='Tel'
        />
      </div>

      <div className='form--group'>
        <label htmlFor='dateOfBirth'>Date of birth </label>
        <input
          type='date'
          name='dateOfBirth'
          value={userState.dateOfBirth}
          onChange={handleChange}
          placeholder='Date of Birth'
        />
      </div>
      <div className='form--group'>
        <label htmlFor='favoriteColor'>Favorite Color</label>
        <input
          type='color'
          id='favoriteColor'
          name='favoriteColor'
          value={userState.favoriteColor}
          onChange={handleChange}
          placeholder='Favorite Color'
        />
      </div>
      <div className='form--group'>
        <label htmlFor='weight'>Weight </label>
        <input
          type='number'
          id='weight'
          name='weight'
          value={userState.weight}
          onChange={handleChange}
          placeholder='Weight in Kg'
        />
      </div>
      <div className='selection'>
        <label htmlFor='country'>Country</label> <br />
        <select name='country' onChange={handleChange} id='country'>
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
            onChange={handleChange}
            checked={userState.gender === 'Female'}
          />
          <label htmlFor='female'>Female</label>
        </div>
        <div>
          <input
            id='male'
            type='radio'
            name='gender'
            value='Male'
            onChange={handleChange}
            checked={userState.gender === 'Male'}
          />
          <label htmlFor='male'>Male</label>
        </div>
        <div>
          <input
            id='other'
            type='radio'
            name='gender'
            value='Other'
            onChange={handleChange}
            checked={userState.gender === 'Other'}
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
            onChange={handleChange}
          />
          <label htmlFor='html'>HTML</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='css'
            name='css'
            onChange={handleChange}
          />
          <label htmlFor='css'>CSS</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='javascript'
            name='javascript'
            onChange={handleChange}
          />
          <label htmlFor='javascript'>JavaScript</label>
        </div>
      </div>
      <div className='bio'>
        <label htmlFor='bio'>Bio</label> <br />
        <textarea
          id='bio'
          name='bio'
          value={userState.bio}
          onChange={handleChange}
          cols='120'
          rows='10'
          placeholder='Write about yourself ...'
        />
      </div>

      <div className='file'>
        <input type='file' name='file' onChange={handleChange} />
      </div>
    </>
  )
}

export default FormGroup