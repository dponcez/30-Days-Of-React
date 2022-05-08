import React from 'react';
import userImage from './images/asabeneh.jpg';

const UserCard = () => {
  return (
    <div className="card--container">
        <div className="card--image__container">
            <figure>
                <img src={userImage} alt="Asabeneh Yetayeh image"/>
                <input type="checkbox"/>
                <figcaption>
                    <h4 className="card--name">asabeneh yetayeh</h4>
                    <p className="card--info">senior developer, finland</p>
                </figcaption>
            </figure>
        </div>
        <h4>skills</h4>
        <div className='buttons--container'>
            <button className='btn'>html</button>
        </div>
    </div>
  )
}

export default UserCard