import React from 'react'
import '../../styles/NavLink.scss'

const NavLink = () => {
  const navMenu = ['home', 'about', 'portfolio', 'blog', 'contact']
  return (
    <nav className='Nav'>
      <ul className='Nav--menu'>
        {navMenu.map((item, index) => (
          <li className='Nav--menu__list' key={index}>
            <a className='Nav--menu__link' href='#'>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLink