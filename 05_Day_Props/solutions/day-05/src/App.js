import React from 'react'
import Design from './components/Design'
import HexaColorGenerator from './components/HexaColorGenerator'
import Images from './components/Images'
import UserCard from './components/UserCard'
import userCardImage from './images/asabeneh.jpg'
// import images
import cssLogo from './images/css_logo.png'
import htmlLogo from './images/html_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'

const App = () => {
  // web technologies
  const title = 'front end technologies'
  const techs = {
    html: htmlLogo,
    css: cssLogo,
    js: jsLogo,
    react: reactLogo
  }

  // user form
  const subscribe = 'subscribe'
  const text = 'Sign up with your email address to receive news and updates.'
  const handleSubmit = () => {
    alert('Successfully subscribed!')
  }

  // hexadecimal color palette
  const hexaColor = () => {
    let string = '0123456789abcdef';
    let color = '';
    for(let i = 0; i < 6; i++){
      let index = Math.floor(Math.random() * string.length);
      color += string[index]
    }

    return `#${color}`
  }

  const colors = []
  for(let i = 0; i < 6; i++){
    let color = hexaColor();
    colors.push(color)
  }

  const hexColor = colors.map((color, index) => (
    <div 
      className='hexa--color'
      style={{backgroundColor: `${color}`}}
      key={index}
    >
      <p className='hexa--color__name'>{color}</p>
    </div>
  ))

  // user card
  const webTechs = [
    'HTML', 'CSS', 'Sass', 'JS', 
    'React', 'Redux', 'Node',
    'MongoDB', 'Python', 'Flask',
    'Django', 'NumPy', 'Pandas',
    'Data Analysis', 'MYSQL', 'GraphicQL',
    'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
  ];

  const showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();

    return `${month} ${date}, ${year}`
  }

  const userInfo = {
    name: 'asabeneh Yetayeh',
    info: 'senior develorper',
    image: userCardImage,
    country: 'finland'
  }

  const technologies = webTechs.map((techs, index) => (
      <button className='btn' key={index}>{techs}</button>
    )
  )

  return (
    <div className="App">
        <Images
          title={title}
          techs={techs}
        />
        <Design
          subscribe={subscribe}
          text={text}
          handleSubmit={handleSubmit}
        />
        <HexaColorGenerator 
          hexaColor={hexColor}
        />
        <UserCard
          userInfo={userInfo}
          showDate={showDate(new Date())}
          webTechs={technologies}
        />
    </div>
  )
}

export default App