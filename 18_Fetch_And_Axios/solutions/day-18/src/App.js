import React from 'react'
import CatBreeds from './components/CatBreeds/CatBreeds'
import CatPerCountries from './components/CatPerCountries/CatPerCountries'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <CatBreeds/>
      <CatPerCountries/>
    </div>
  )
}

export default App