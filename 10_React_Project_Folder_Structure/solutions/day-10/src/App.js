import React, { createContext, useEffect, useState } from 'react'
import ReactSwitch from 'react-switch'
import Header from './components/Header/Header'
import './styles/DarkMode.scss'

const App = () => {
  const [theme, setTheme] = useState('dark')
  const ThemeContext = createContext(null)

  const toggleTheme = () => {
    setTheme((currentColor) => (currentColor === 'light' ? 'dark' : 'light'))
  }
  useEffect(() => {
    toggleTheme()
  }, [])
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        <Header/>
        <div className='switch'>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App