import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/NavLink.scss'

const NavLink = () => {
  const navMenu = ['home', 'about', 'portfolio', 'blog', 'contact']
  return (
    <nav className='Nav'>
      <ul className='Nav--menu'>
        <li className='Nav--menu__list'>
          <Link 
            className='Nav--menu__link' 
            to="/">{navMenu[0]}</Link>
        </li>
        <li className='Nav--menu__list'>
          <Link 
            className='Nav--menu__link' 
            to="/about">{navMenu[1]}</Link>
        </li>
        <li className='Nav--menu__list'>
          <Link 
            className='Nav--menu__link' 
            to="/portfolio">{navMenu[2]}</Link>
        </li>
        <li className='Nav--menu__list'>
          <Link 
            className='Nav--menu__link' 
            to="/blog">{navMenu[3]}</Link>
        </li>
        <li className='Nav--menu__list'>
          <Link 
            className='Nav--menu__link' 
            to="/contact">{navMenu[4]}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavLink