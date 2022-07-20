# React Router

<img width='100%' height='auto' src='https://miro.medium.com/max/1400/0*ngqSFJgQ1fkpW_1Y' alt=''/>
<p>Image from <a href='https://github.com/ReactTraining/react-router'>https://github.com/ReactTraining/react-router</a></p>

1. What package do you use to implement routing in react?
- 1 - Install a React Router. A simple way to install the react-router is to run the following code snippet in the command prompt window. ...
- 2 - Create Components. In this step, we will create four components.
- 3 - Add a Router. Now, we will add routes to the app.
Source: [tutorialpoint - react-router](https://www.tutorialspoint.com/reactjs/reactjs_router.htm)

2. What is the default export in react-router-dom?
We need to import the react-router-dom and extract all necessary components we need for routing and then,
react-router-dom will exported as default like so.
```js
import { BrowserRouter as Router, Route } from 'react-router-dom'
export default function App() {
  return(
    <Router>
      <div className='App'>
        <Route path='/home' component={Home}/>
      </div>
    </Router>
  )
}
```

3. What is the use of the following Components(Route, NavLink, Switch, Redirect, Prompt)
- Route: The Route component allows to navigate between components. It is a pathway from one component to another. The Route component has two required props: the path and component or render. The path props is where the component has to be rendered and the component props is the component which has to be rendered in that specific path.
- NavLink: The NavLink component allow us to navigate each component. It takes a to required props. The NavLink is a component on top of anchor tag. Clicking on a NavLink does not do a page refresh which is one of the best quality of using a router.
- Switch: The switch component looks through all of its child routes and it displays the first one whose path matches the current URL. This component is what we want to use in most cases for most applications, because we have multiple routes and multiple plate pages in our app but we only want to show one page at a time.
Source: [freecodecamp - react-router-cheatsheet](https://www.freecodecamp.org/news/react-router-cheatsheet/)
- Redirect: Redirect can help us to redirect a route to a certain path based some condition. For instance if a user is logged in we redirect it to the dashboard otherwise to the login page.
- Prompt: Used to prompt the user before navigating away from a page. When your application enters a state that should prevent the user from navigating away (like a form is half-filled out).
Source: [v5 react router](https://v5.reactrouter.com/core/api/Prompt)
