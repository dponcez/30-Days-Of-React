import React from 'react'
import image from '../../assets/images/image-code.jpg'
import '../../styles/Header.scss'

const Header = () => {
  return (
    <div className='Header'>
      <div className='heading--container'>
        <h1 className='heading'>coding paradise</h1>
        <h2 className='sub--heading'>nothing in life is easy, building your path is the way to progress every day.</h2>
      </div>
      <img className='image' src={image} alt='coding time'/>
    </div>
  )
}

export default Header