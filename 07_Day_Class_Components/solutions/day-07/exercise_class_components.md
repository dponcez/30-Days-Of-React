# Class Components

### 1. How do you write a pure JavaScript function

We write a pure JavaScript function using the syntax below.

This function should be return the same value, that means the value never change.

```js
function calculatePrice(amount){
    return amount * 1.025
}
```

### 2. What is inheritance and how do you make a child from a parent class?

Class based component is made using JavaScript class and it inherit from React.Component, that means, a child component can inherit attributes or methods from the parent component.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import userImagr from './images/user_image.png'

const UserCard = ({user: {fName, lName, image}}) => (
	<div className='user--card'>
		<div className='user--image'>
			<img src={image} alt={fName}/>
		</div>
		<h2>{fName} {lName}</h2>
	</div>
)

class Header extends React.Component {
	constructor(props){
		super(props)
	}
	
	render(){
		const {
            welcome,
			title,
			author: {fName, lName}
		} = this.props.data

		return(
			<header>	
				<div className='header--container'>
                    <h1>{welcome}</h1>
                    <h2>{title}</h2>
                    <div className='user--info'>
                        <p>{fName} {lName}</p>
                    </div>
                </div>
			</header>
		)
	}
}

class Main extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='main--container'>
                <UserCard user={this.props.user}/>
            </div>
        )
    }
}

class App extends React.Component {
    render(){
        const data = {
            welcome: 'Welcome to 30 Days Of React',
            title: 'Getting started with React',
            author: {
                fName: 'John',
                lName: 'Doe'
            }
        }
        const user = { ...data.author, image: userImage }
        return(
            <div>
                <Header user={data}/>
                <Main user={user}/>
            </div>
        )
    }
}

const root = document.getElementById('root')
ReactDOM.render(
    <App/>,
    root
)
```

### 3. What is class based React component ?

class based component used to have state and life cycle methods, is also a child of React.Component and it has a built-in render method and it may have a constructor method.

### 4. What is the difference between functional React component and class based React component ?

The following information was taken from [geeeksforgeeks.org](https://www.geeksforgeeks.org)

A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. A class component requires you to extend from React. Component and create a render function which returns a React element. There is no render method used in functional components. More information about 'functional component and class component', visit [geeksforgeeks](https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/#:~:text=A%20functional%20component%20is%20just,method%20used%20in%20functional%20components).

### 5. When do we need to use class based components instead of functional components

In class-based component, the render method will be called, whenever the state of the component changes, the render method should be required in each class compenent, and also this method should be pure and return the same result each time it's invoked. More information about 'class-based component, visit [reactjs](https://reactjs.org/docs/react-component.html#render)

Class-base component are built-in ES6

```js
// ES6
class Header extends React.Component {
    render(){
        return(
            <header>
                <h1>Heading</h1>
            </header>
        )
    }
}
```

or

```js
class Header extends React.Component {
    render(){
        return <h1>Heading</h1>
    }
}
```

Functional component render the UI (User Interface) based on props, it help us to work more effecently, because we can use ES6 to write our components or function as well, but most of the time we write our component using ES6, but is not required to use it.

Example of ES6 and function component
```js
// ES6
const Header = () => {
    return (
        <header>
            <h1>Heading</h1>
        </header>
    )
}
```

We can write the example above like so.

```js
const Header = () => <header><h1>heading</h1></header>

// Or

const Header = (props) => (
    <header>
        <h1>Heading</h1>
    </header>
)
```

### 6. What is the use cases of class based component ?

The following information was taken from [geeksforgeeks.com](https://www.geeksforgeeks.org/)

React class based components are the bread and butter of most modern web apps built in ReactJS. These components are simple classes (made up of multiple functions that add functionality to the application). All class based components are child classes for the Component class of ReactJS. More information about 'class based component', visit [geeksforgeeks](https://www.geeksforgeeks.org/reactjs-class-based-components/)

### 7. Which type of component do use most frequently ? functional or class-based component

Most of the time a class-based component is used instead of functional component, but when the new version of React was released, it allowed us to write functional component to our applications.

### 8. What is React life cycle ?

The following information was taken from [w3school.com](https://www.w3schools.com/react/).

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting. More information about 'lifecycle', visit [w3Schools](https://www.w3schools.com/react/react_lifecycle.asp#:~:text=Each%20component%20in%20React%20has,Mounting%2C%20Updating%2C%20and%20Unmounting).

### 9. What is state in React ?

The following information was taken from [simplelear.com](https://www.simplilearn.com/).

The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders. More information about 'state' of React, visit [simplelearn](https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state#:~:text=What%20Is%20'State'%20in%20ReactJS,%2C%20the%20component%20re%2Drenders).