import React from 'react'
import { nav_items } from '../../utils/nav_items'

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='menu'>
        {nav_items.map((item, index) => (
          <li className='item' key={index}>
            <a className='link' href={item}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav