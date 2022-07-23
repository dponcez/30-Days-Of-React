import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import '../../styles/Footer.scss'

const Footer = () => {  
  return (
    <div className="Footer">
      <div className="Footer--container">
        <div className="social--media">
          <a href='#'>
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faWhatsapp}/>
          </a>
        </div>
        <div className='copyright'>
          <p>
            <span>&copy;</span> damian ponce - 
            <time dateTime='2022-07-23'>2022</time>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer