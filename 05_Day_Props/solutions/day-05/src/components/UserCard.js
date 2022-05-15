import React from 'react'
import '../styles/userCard.css'

const Buttons = ({webTechs}) => (
  <>
    {webTechs}
  </>
)

const Footer = ({showDate}) => (
  <div className="date--container">
    <span className="fa-solid fa-clock"></span>
    <p>Joined on <time>{showDate}</time></p>
  </div>
)

const UserCard = ({userInfo, webTechs, showDate}) => {
  return (
    <div className="card--bg">
      <article className="card--container">
        <div className="card--image__container">
            <figure>
                <img className="user--image" src={userInfo.image} alt={userInfo.name}/>
                <figcaption>
                    <h4 className="card--name">{userInfo.name}</h4>
                    <input type="checkbox"/>
                    <p className="card--info">{userInfo.info}, {userInfo.country}</p>
                </figcaption>
            </figure>
        </div>
        <h4>skills</h4>
        <div className='buttons--container'>
            <Buttons webTechs={webTechs}/>
        </div>
        <Footer showDate={showDate}/>
      </article>
    </div>
  )
}

export default UserCard