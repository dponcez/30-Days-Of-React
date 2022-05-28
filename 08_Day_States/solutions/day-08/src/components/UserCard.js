import React, { Component } from 'react'
import '../styles/UserCard.css'

const Button  = ({text, onClick}) => (
  <button 
    className='btn primary--btn' 
    onClick={onClick}
  >
      {text}
  </button>
)

const Buttons = ({webTechs}) => <>{webTechs}</>

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

class UserCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      backgroundColor: '',
      color: '',
    }
  }

  onChangeBackground = () => {
    const backgroundColor = ''
    const color = ''

    const newStateBgColor = this.state.backgroundColor
    const newStateColor = this.state.color
    
    const newBackgroundColor = (newStateBgColor === backgroundColor) ?
      'hsl(350, 50%, 50%)' : ''
    
    const newColor = (newStateColor === color) ?
      '' : '#ffffff'
    
    this.setState({
      backgroundColor: newBackgroundColor,
      color: newColor
    })
    
  }

  render(){
    return(
      <div className="card--bg">
        <article 
          className="card--container" 
          style={{
            backgroundColor: this.state.backgroundColor
          }}
      >
          <div className="card--image__container">
              <UserImage style={{color: this.state.color}} userInfo={this.props.userInfo}/>
          </div>
          <h4>skills</h4>
          <div className='buttons--container'>
              <Buttons webTechs={this.props.webTechs}/>
          </div>
        </article>
        <Button
          text='change background'
          onClick={this.onChangeBackground}
        />
      </div>
    )
  }
}

export default UserCard
