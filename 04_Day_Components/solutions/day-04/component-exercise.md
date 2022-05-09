#### 1. What is the difference between a regular function and an arrow function?
Regular functions created using function declaration or expression are constructible and callable. Since regular function are constructible, they can be called using the new keyword, however, arrow function is not constructible, just only callable, both, arrow function and function declaration or function expression work in similar manner.
While arrow function allows developers to get a resutl with fewer lines of code and approximately half the typing. [betterprogramming](https://betterprogramming.pub/difference-between-regular-functions-and-arrow-functions-f65639aba256)

#### 2. What is a React Component?
Component are independent and allows developers to reuse a piece of code, component serves the same porpuse
as JavaScript function. [w3School](https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.)

#### 3. How do you make a React functional component?
We can make a functional component using a JavaScript function, but writting the component with capital letter, we can also use an arrow function to create a component or a regular function.
Example: 

```js
    const Header = () => {}
``` 
or 
```js
    function Header(){}
```

The example above are React function components.

#### 4. What is the difference between a pure JavaScript function and a functional component?
A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. A class component requires you to extend from React. Component and create a render function which returns a React element. 
There is no render method used in functional components. [geeksforgeeks](https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/#:~:text=A%20functional%20component%20is%20just,method%20used%20in%20functional%20components.)

#### 5. How small is a React component?
A React component is a small, reusable code, which is responsable for one part of the application UI. Eventually each component is usually compact on its size (100-200 lines) or may be less.

#### 6. Can we make a button or input field component?
As [Reactjs.org](https://react.org) says, an HTML form elements such as input maintain their own state and update it based on user input. In react, mutable state is typically kept in the state property of components, and only updated with setState().
But everything in React can be a component such as buttons, input fields, header, footer etc. [React input field](https://reactjs.org/docs/forms.html)


#### 7. Make a reusable Button component.
```js
    const Button = () => {
        return (
            <div className="button--container">
                <button className="btn btn-primary">Click me</button>
            </div>
        )
    }

    export default Button
```

#### 8. Make a reusable InputField component.
```js
    const InputField = () => {
        return (
            <form className="form--container">
                <input type="text"/>
            </form>
        )
    }

    export default InputField
```

#### 9. Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).
```js
    const AlertBox = () => {
        return (
            <div className="warning-alert">
                <p className="alert">Warning! This will be dangerous.</p>
            </div>
        )
    }

    export default AlertBox
```