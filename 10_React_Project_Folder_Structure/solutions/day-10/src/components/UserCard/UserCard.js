import React from 'react';
import '../../styles/UserCard.scss'

const Buttons = ({webTechs}) => <>{webTechs}</>

const Footer = ({showDate}) => (
    <div className='date--container'>
        <span className='fa-solid fa-clock'></span>
        <p>Joined on <time>{showDate}</time></p>
    </div>
)

const UserImage = ({userInfo}) => (
    <figure>
        <img className="user--image" src={userInfo.image} alt={userInfo.name}/>
        <figcaption>
            <h4 className="card--name">{userInfo.name}</h4>
            <input type="checkbox"/>
            <p className="card--info">{userInfo.info}, {userInfo.country}</p>
        </figcaption>
    </figure>
)

class UserCard extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div className="card--bg">
                <article className="card--container">
                    <div className="card--image__container">
                        <UserImage userInfo={this.props.userInfo}/>
                    </div>
                    <h4>skills</h4>
                    <div className='buttons--container'>
                        <Buttons webTechs={this.props.webTechs}/>
                    </div>
                    <Footer showDate={this.props.showDate}/>
                </article>
                </div>
        );
    }
}

export default UserCard;