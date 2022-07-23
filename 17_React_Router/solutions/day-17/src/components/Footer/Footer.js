import React from 'react'
import '../../styles/Footer.scss'

// const socialBrands = {
//     facebook: facebookIcon,
//     twitter: twitterIcon,
//     instagram: instagramIcon,
//     github: githubIcon
//   }

const Footer = () => {
  // const getBrandObject = Object.keys(socialBrands)
  // const getSocialBrands = getBrandObject.map((icons, index) => (
  //   <a key={index} href='#'>{icons}</a>
  // ))
  return (
    <div className="Footer">
      <div className="Footer--container">
        <div className="social--media">
          <a href={facebookIcon}></a>
        </div>
        <div className='copyright'>
          <span>&copy</span>
          <p>damian ponce</p>
        </div>
      </div>
    </div>
  );
}

export default Footer