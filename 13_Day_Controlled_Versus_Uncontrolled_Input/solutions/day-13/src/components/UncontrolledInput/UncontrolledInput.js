import React, { useState, useRef } from 'react'
import styles from '../../styles/UncontrolledInput.module.css'

const UncontrolledInput = () => {
  const [data, setData] = useState('')

  const firstName = useRef(null);
  const lastName = useRef(null);
  const country = useRef(null);
  const title = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(firstName.current.value)
    console.log(lastName.current.value)
    console.log(country.current.value)
    console.log(title.current.value)

    const data = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      country: country.current.value,
      title: title.current.value
    }

    console.log(data)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setData({
      data: { ...data, [name]: value }
    })
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>add student</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor='firstName'>first name</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='Type your first name'
            ref={firstName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='lastName'>last name</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            placeholder='Type your last name'
            ref={lastName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='country'>country</label>
          <input
            type='text'
            id='country'
            name='country'
            placeholder='Type your country'
            ref={country}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='title'>title</label>
          <input
            type='text'
            id='title'
            name='title'
            placeholder='Type your title'
            ref={title}
            onChange={handleChange}
          />
        </div>
        <button className={styles.submit}>Submit</button>
      </form>
    </div>
  )
}

export default UncontrolledInput