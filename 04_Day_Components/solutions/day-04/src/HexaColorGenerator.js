import React from 'react';
import './styles/hexa.css';

const HexaColorGenerator = () => {
    const hexaColor = () => {
      let strings = '0123456789abcdef';
      let color = '';
      for(let i = 0; i < 6; i++){
          let index = Math.floor(Math.random() * strings.length);
          color += strings[index];
      }

      return `#${color}`;
  }
  
  return (
    <div className="hexa--container">
      <div className="hexa--color" style={{backgroundColor: hexaColor()}}>
        <p className="hexa--color__name">{hexaColor()}</p>
      </div>
      <div className="hexa--color" style={{backgroundColor: hexaColor()}}>
        <p className="hexa--color__name">{hexaColor()}</p>
      </div>
      <div className="hexa--color" style={{backgroundColor: hexaColor()}}>
        <p className="hexa--color__name">{hexaColor()}</p>
      </div>
      <div className="hexa--color" style={{backgroundColor: hexaColor()}}>
        <p className="hexa--color__name">{hexaColor()}</p>
      </div>
      <div className="hexa--color" style={{backgroundColor: hexaColor()}}>
        <p className="hexa--color__name">{hexaColor()}</p>
      </div>
      <div className="hexa--color" style={{backgroundColor: hexaColor()}}>
        <p className="hexa--color__name">{hexaColor()}</p>
      </div>
    </div>
  )
}

export default HexaColorGenerator