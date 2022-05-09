import React from 'react';

const Images = () => {
  return (
    <div className='images--container'>
        <img className="image" src={htmlLogo} alt="html logo"/>
        <img className="image" src={cssLogo} alt="css logo"/>
        <img className="image" src={jsLogo} alt="js logo"/>
        <img className="image" src={reactLogo} alt="react logo"/>
    </div>
  )
}

export default Images