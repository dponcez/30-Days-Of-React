import React from 'react'
import NavLinks from './NavLinks/NavLinks'
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import DummyData from '../../pages/DummyData/DummyData'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='heading'>30 days of react</h1>
      <Router>
        <NavLinks/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/dummy-data' element={<DummyData/>}/>
        </Routes>
      </Router>
    </header>
  )
}

export default Header