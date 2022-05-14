import React from 'react'
import Design from './components/Design.js'
import Images from './components/Images.js'
import cssLogo from './images/css_logo.png'
import htmlLogo from './images/html_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'



const App = () => {
  const title = 'front end technologies'
  const techs = {
    html: htmlLogo,
    css: cssLogo,
    js: jsLogo,
    react: reactLogo
  }

  const subscribe = 'subscribe'
  const text = 'Sign up with your email address to receive news and updates.'
  const handleSubmit = () => {
    alert('Successfully subscribed!')
  }
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
    </div>
  )
}

export default App