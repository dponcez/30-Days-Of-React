import React from 'react';
import '../styles/HexaColor.css';

const hexaColor = () => {
  let string = '0123456789abcdf';
  let color = '';
  for(let i = 0; i < 6; i++){
    const index = Math.floor(Math.random() * string.length);
    color += string[index];
  }

  return `#${color}`
}

const colors = []
for(let i = 0; i < 32; i++){
  const color = hexaColor();
  colors.push(color)
}

const HexaColor = () => {
  const color = colors.map((color, index) => (
    <div 
      className='hexa--color'
      style={{backgroundColor: `${color}`}}
      key={index}
    >
      <p className='hexa--color__name'>{color}</p>
    </div>
  ))

  return color
}

const HexaColorGenerator = ({hexColor}) => {
  return (
    <div className='container'>
      <h1 className='heading'>30 days of react</h1> 
      <p className='text'>hexadecimal colors</p>
      <div className='hexa--container'>
        <HexaColor hexColor={hexColor}/>
      </div>
    </div>
  )
}

export default HexaColorGenerator