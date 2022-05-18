import React from 'react'
import Numbers from './components/Numbers'
import HexaColorGenerator from './components/HexaColorGenerator'
import Populations from './components/Populations'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className='App'>
        <Numbers/>
        <HexaColorGenerator/>
        <Populations/>
    </div>
  )
}

export default App