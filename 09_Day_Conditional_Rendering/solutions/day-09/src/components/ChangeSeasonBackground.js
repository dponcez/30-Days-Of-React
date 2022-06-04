import React, { Component } from 'react'
import Button from './Button'

// Button style
const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'auto',
  height: '3rem',
  padding: '1rem 2rem',
  border: 0,
  borderRadius: '.5rem',
  boxShadow: '.25vmin .35vmin .7vmin rgba(0,0,0,.7)',
  cursor: 'pointer'
}

// Header style
const headerStyle = {
  autumn: {
    backgroundColor: 'hsl(25, 60%, 53%)'
  },
  winter: {
    backgroundColor: 'hsl(215, 50%, 43%)'
  },
  spring: {
    backgroundColor: 'hsl(125, 65%, 43%)'
  },
  summer: {
    backgroundColor: 'hsl(125, 35%, 43%)'
  }
}

// Season: Autumn, Winter, Spring, Summer
const Header = ({bgColor, season}) => (
  <header style={bgColor} className='header'>
    <h1 className='heading'>{season}</h1>
  </header>
)

class ChangeSeasonBackground extends Component {
  constructor(props){
    super(props)
    this.state = {
      seasonOn: true,
    }
    this.handleChangeBackground = this.handleChangeBackground.bind(this)
  }

  handleChangeBackground(){
    this.setState(prevState => ({
      seasonOn: !prevState.seasonOn
    }))
  }

  render(){
    return (
      <div>
        <Header 
          season={handleChangeBackground}
          style={this.state.seasonOn ? headerStyle.autumn : headerStyle.spring ? headerStyle.winter : headerStyle.summer}
        />
        <Button
          style={buttonStyle}
          text='Autumn'
          onClick={handleChangeBackground}
        />
      </div>
    )
  }
}

export default ChangeSeasonBackground