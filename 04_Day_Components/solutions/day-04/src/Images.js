import React from 'react';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import jsLogo from './images/js_logo.png';
import reactLogo from './images/react_logo.png';
import './styles/images.css';

const Images = () => {
  return (
    <article className="front--end">
      <h4 className="title">front end technologies</h4>
      <div className='images--container'>
          <img className="image" src={htmlLogo} alt="html logo"/>
          <img className="image" src={cssLogo} alt="css logo"/>
          <img className="image" src={jsLogo} alt="js logo"/>
          <img className="image" src={reactLogo} alt="react logo"/>
      </div>
    </article>
  )
}

export default Images