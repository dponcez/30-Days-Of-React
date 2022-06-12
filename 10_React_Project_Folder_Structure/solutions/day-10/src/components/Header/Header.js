import React from 'react'
import react_logo from '../../assets/icons/react_logo.png'
import '../../styles/Header.scss'
import Nav from '../Nav/Nav'

const Header = () => {
  const logo = {
    width: '3rem',
    height: '3rem',
    objectFit: 'scale-down'
  }
  return (
    <header className='header'>
      <div className='logo--container'>
        <img style={logo} src={react_logo} alt='react logo'/>
      </div>
      <Nav/>
      <h1 className='heading'>30 Days Of React Challenge</h1>
    </header>
  )
}

export default Header