import React, { Component } from 'react';
import UserCard from './components/UserCard';
import RandomCountrySelector from './components/RandomCountrySelector'
import userImage from './images/asabeneh.jpg';

class App extends Component {
  render() {
    const userInfo = {
      name: 'asabeneh yetayeh',
      info: 'senior developer',
      image: userImage,
      country: 'finland'
    }

    const webTechs = [
      'HTML', 'CSS', 'Sass', 'JS', 
      'React', 'Redux', 'Node',
      'MongoDB', 'Python', 'Flask',
      'Django', 'NumPy', 'Pandas',
      'Data Analysis', 'MYSQL', 'GraphicQL',
      'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
    ]

    const technologies = webTechs.map((techs, index) => (
      <button className='btn' key={index}>{techs}</button>
    ))

    return (
      <div className='App'>
        <UserCard 
          userInfo={userInfo}
          webTechs={technologies}
        />
        <RandomCountrySelector/>
      </div>
    );
  }
}

export default App;