import React, { createContext, useEffect, useState } from 'react'
import ReactSwitch from 'react-switch'
import './App.css'
import userImage from './assets/images/asabeneh.jpg'
import Design from './components/Design/Design'
import Header from './components/Header/Header'
import HexaColorGenerator from './components/HexaColorGenerator/HexaColorGenerator'
import Numbers from './components/Numbers/Numbers'
import UserCard from './components/UserCard/UserCard'
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

  const showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();

    return `${month} ${date}, ${year}`
}

  const webTechs = [
    'HTML', 'CSS', 'Sass', 'JS', 
    'React', 'Redux', 'Node',
    'MongoDB', 'Python', 'Flask',
    'Django', 'NumPy', 'Pandas',
    'Data Analysis', 'MYSQL', 'GraphicQL',
    'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
  ]

  const userInfo = {
    name: 'asabeneh yetayeh',
    info: 'senior developer',
    image: userImage,
    country: 'finland'
  }

  const technologies = webTechs.map((techs, index) => (
    <button className='btn' key={index}>{techs}</button>
  ))

  const subscribe = 'subscribe'
  const text = 'Sign up with your email address to receive news and updates.'
  const handleSubmit = () => {
    alert('Successfully subscribed!')
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        <Header/>
        <div className='switch'>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
        </div>
        <main className='grid'>
          <Design
            subscribe={subscribe}
            text={text}
            handleSubmit={handleSubmit}
          />
          <HexaColorGenerator/>
          <Numbers/>
          <UserCard
            userInfo={userInfo}
            webTechs={technologies}
            showDate={showDate(new Date())}
          />
        </main>
      </div>
    </ThemeContext.Provider>
  )
}


export default App