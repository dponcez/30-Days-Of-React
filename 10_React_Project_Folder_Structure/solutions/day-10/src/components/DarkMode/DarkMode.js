import React, { useEffect, useState } from 'react';

const DarkMode = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const toggleTheme = () => {
      setTheme((currentColor) => currentColor === 'white' ? 'black':'white')
    }
    // setToggle(true)
    console.log(theme)
    return toggleTheme
  }, [])
  return (
    <div className='toggle--container'>
      <input
        type='checkbox'
        className='checkbox'
        onChange={setTheme}
      />
      <span className='slider'></span>
    </div>
  )
}

export default DarkMode