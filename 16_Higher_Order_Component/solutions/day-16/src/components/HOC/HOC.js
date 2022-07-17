import React from 'react'
import SubmitButton from '../SubmitButton/SubmitButton'
import inputs from '../../utils/inputs.js'
import styles from '../../styles/Hocs.module.css'

const Input = ({type, id, className, placeholder}) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    className={className}
  />
)

const inputTypes = (Param, name='default') => {
  const {type, id, placeholder} = inputs.find(input => input.name === name)
  return (props) => {
    return (
      <>
        <label style={{
          display: 'block',
          marginBlock: '.5rem',
          fontSize: '1rem',
          fontFamily: 'Open Sans, sans-serif',
          fontWeight: 600,
          color: '#010100',
          textTransform: 'capitalize'
        }} htmlFor={id}>{name}</label>
        <Param
          {...props}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </>
    )
  }
}

const Name = inputTypes(Input, 'name', 'type your name')
const Tel = inputTypes(Input, 'tel')
const InputDate = inputTypes(Input, 'date')
const Month = inputTypes(Input, 'month')
const Email = inputTypes(Input, 'email', 'type your email')
const Password = inputTypes(Input, 'password', 'type your password')
const WebSite = inputTypes(Input, 'website', 'type your website url')
const FavColor = inputTypes(Input, 'favorite color')
const Weather = inputTypes(Input, 'checks weather')
const UpdateFiles = inputTypes(Input, 'update files')
const Search = inputTypes(Input, 'search', 'search...')
const Button = inputTypes(Input, 'button')
const Default = inputTypes(Input, 'default')
const Hidden = inputTypes(Input, 'hidden')
const Image = inputTypes(Input, 'image')
const InputNumber = inputTypes(Input, 'number')
const Radio = inputTypes(Input, 'radio')
const Range = inputTypes(Input, 'happiness')
const Reset = inputTypes(Input, 'reset')
const Submit = inputTypes(Input, 'submit')
const Time = inputTypes(Input, 'time')

const HOC = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='form--container'>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <Search className={styles.search}/>
          <Default className={styles.search}/>
          <Name className={styles.search}/>
          <Email className={styles.search}/>
          <Password className={styles.search}/>
        </div>
        <div className={styles.formGroup}>
          <Month/>
          <Time/>
          <Tel/>
          <FavColor/>
          <InputDate/>
          <WebSite className={styles.search}/>
        </div>
        <div className={styles.formGroup}>
          <Weather/>
          <UpdateFiles/>
          <Hidden/>
          <Image/>
          <InputNumber/>
        </div>
        <div className={styles.formGroup}>
          <Radio/>
          <Range/>
          <Button className={styles.button}/>
          <Reset className={styles.button}/>
          <Submit className={styles.button}/>
        </div>
        <SubmitButton
          type='button'
          text='Submit'
        />
      </form>
    </div>
  )
}

export default HOC