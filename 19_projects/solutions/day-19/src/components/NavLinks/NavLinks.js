import React from 'react'
import { Link } from 'react-router-dom'
import './NavLinks.scss'

const NavLinks = () => {
  const links = ['home', 'cat cards', 'about', 'dummy data']
  return (
    <nav className='Nav'>
      <ul className='Nav--menu'>
        <li className='Nav--menu__item'>
          <Link 
            className='Nav--menu__link'
            to='/'
          >
            {links[0]}
          </Link>
        </li>
        <li className='Nav--menu__item'>
          <Link 
            className='Nav--menu__link'
            to='/cards'
          >
            {links[1]}
          </Link>
        </li>
        <li className='Nav--menu__item'>
          <Link 
            className='Nav--menu__link'
            to='/about'
          >
            {links[2]}
          </Link>
        </li>
        <li className='Nav--menu__item'>
          <Link 
            className='Nav--menu__link'
            to='/dummy-data'
          >
            {links[3]}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks