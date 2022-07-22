import React from 'react'
import facebookIcon from '../../assets/icons/facebook-brands.svg'
import twitterIcon from '../../assets/icons/twitter-brands.svg'
import instagramIcon from '../../assets/icons/instagram-brands.svg'
import githubIcon from '../../assets/icons/github-brands.svg'
import '../../styles/Footer.scss'

const brands = {
  facebook: facebookIcon,
  twitter: twitterIcon,
  instagram: instagramIcon,
  github: githubIcon
}

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer--container">
        <div className="social--media">
          {brands.map((icons, index) => (
            <a key={index} href='#'>{icons}</a>
          ))}
        </div>
      </div>
      <div className='copyright'>
        <span>&copy</span>
        <p>damian ponce</p>
      </div>
    </div>
  );
}

export default Footer