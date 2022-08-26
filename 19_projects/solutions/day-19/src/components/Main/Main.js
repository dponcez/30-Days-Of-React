import React from 'react'
import NavLinks from '../NavLinks/NavLinks'
import Cards from '../../pages/Cards/Cards'
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import DummyData from '../../pages/DummyData/DummyData'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Main = () => {
  return (
    <Router>
      <NavLinks/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dummy-data' element={<DummyData/>}/>
      </Routes>
    </Router>
  )
}

export default Main