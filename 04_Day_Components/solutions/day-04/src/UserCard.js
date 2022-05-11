import React from 'react';
import userImage from './images/asabeneh.jpg';
import './styles/userCard.css';

const UserCard = () => {
  const webTechs = [
    'HTML', 'CSS', 'Sass', 'JS', 
    'React', 'Redux', 'Node',
    'MongoDB', 'Python', 'Flask',
    'Django', 'NumPy', 'Pandas',
    'Data Analysis', 'MYSQL', 'GraphicQL',
    'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
  ];
  return (
    <div className="card--bg">
      <article className="card--container">
        <div className="card--image__container">
            <figure>
                <img className="user--image" src={userImage} alt="Asabeneh Yetayeh image"/>
                <figcaption>
                    <h4 className="card--name">asabeneh yetayeh</h4>
                    <input type="checkbox"/>
                    <p className="card--info">senior developer, finland</p>
                </figcaption>
            </figure>
        </div>
        <h4>skills</h4>
        <div className='buttons--container'>
            {webTechs.map(techs => <button className="btn" key={techs}>{techs}</button>)}
        </div>
        <div className="date--container">
            <span className="fa-solid fa-clock"></span>
            <p>Joined on <time>Aug 20, 2020</time></p>
        </div>
      </article>
    </div>
  )
}

export default UserCard