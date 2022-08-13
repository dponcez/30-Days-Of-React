import React from 'react'
import { Link } from 'react-router-dom'
import './NavLinks.scss'

const NavLinks = () => {
  const links = ['home', 'about', 'dummy data']
  return (
    <nav className='nav'>
      <ul className='nav--menu'>
        <li className='nav--menu__item'>
          <Link 
            className='nav--menu__link'
            to='/'
          >
            {links[0]}
          </Link>
        </li>
        <li className='nav--menu__item'>
          <Link 
            className='nav--menu__link'
            to='/about'
          >
            {links[1]}
          </Link>
        </li>
        <li className='nav--menu__item'>
          <Link 
            className='nav--menu__link'
            to='/dummy-data'
          >
            {links[2]}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks