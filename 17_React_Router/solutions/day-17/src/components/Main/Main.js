import React from 'react'
import NavLink from '../NavLink/NavLink'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Portfolio from '../../pages/Portfolio'
import Blog from '../../pages/Blog'
import Contact from '../../pages/Contact'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Main = () => {
  return (
    <Router>
      <NavLink/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default Main