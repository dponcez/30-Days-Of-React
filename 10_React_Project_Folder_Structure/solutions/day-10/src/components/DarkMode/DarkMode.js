import React, { useEffect, useState } from 'react';
import icon_moon from '../../assets/icons/moon-solid.svg';
import icon_sun from '../../assets/icons/sun-solid.svg';

const DarkMode = () => {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const toggleTheme = () => {
      setTheme((currentColor) => currentColor === 'light' ? 'dark':'light')
    }
    return toggleTheme
  }, [])

  const ThemeContext = createContext(null)

  const sun = {
    width: '1rem',
    height: '1rem',
    backgroundImage: `url(${icon_sun})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
  const moon = {
    width: '1rem',
    height: '1rem',
    backgroundImage: `url(${icon_moon})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
  return (
    <div className='toggle--container'>
      <input
        type='checkbox'
        className='checkbox'
        onChange={setTheme}
      />
      <div className='slider'>
        <span style={sun}></span>
        <span style={moon}></span>
      </div>
    </div>
  )
}

export default DarkMode