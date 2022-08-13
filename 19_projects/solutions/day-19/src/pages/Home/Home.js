import React from 'react'
import image from '../../assets/image-code.jpg'
import './Header.scss'

const Home = () => {
  return (
    <div className="Header">
      <div className="heading--container">
        <h1 className="heading">30 days of react</h1>
        <h2 className="sub--heading">
          nothing in life is easy, building your path is the way to progress
          every day.
        </h2>
      </div>
      <img className="image" src={image} alt="coding time" />
      <p className="unsplash">
        Photo by{" "}
        <a href="https://unsplash.com/@ffstop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Fotis Fotopoulos
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/es/s/fotos/code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </div>
  );
}

export default Home