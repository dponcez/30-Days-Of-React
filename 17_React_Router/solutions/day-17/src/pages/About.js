import React from 'react'
import asabeneh from '../assets/images/asabeneh.jpg'
import '../styles/About.scss'

const About = () => {
  return (
    <div className='About About--container'>
      <figure className='container figure'>
        <div className='About--image__container'>
          <img src={asabeneh} alt='Asabeneh - Senior Developer'/>
        </div>
        <figcaption className='figcaption'>
          <p className='About--name'>asabeneh yetayeh</p>
          <h2 className='About--info'>senior developer</h2>
        </figcaption>
      </figure>
      <div className='container info'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo augue massa, ut porttitor mauris ultrices eu. Duis nec orci a nunc consectetur tristique. Sed in nisl tristique, fringilla magna non, lobortis sapien. Aenean vel leo ut risus convallis sollicitudin id id orci. Proin a sapien iaculis, finibus risus quis, convallis odio.</p>
      </div>
    </div>
  )
}

export default About