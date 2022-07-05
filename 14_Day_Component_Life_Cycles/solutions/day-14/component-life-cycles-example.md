# Component Life Cycles

### 1. What is component life cycles?

Component life cycle is the process of mounting, updating and destroying a component in a React application. You can associate a component life cycle with the process of human growth:birth, adult, elderly and death.

### 2. What is the purpose of life cycles?

Maintain, update and destroy a component during its own process or life cycle.
### 3. What are the three stages of a component life cycle?

- Mounting
- Updating
- Unmounting

### 4. What does mounting means?

Rendering React component into the DOM is called mounting.
When we have been making a class-based component we used a built-in render method and it is required in all class-based components but other methods are optional.

### 5. What does updating means?

After a component has been mounted on the DOM, it can be updated when a state or props change. An update of a React component can be caused by changes to props or state.

### 6. What does unmounting means?

The final phase in the lifecycle of a component is unmounting. The unmounting phase removes component from the DOM.
The componentWillUnmount method is the only built-in method that gets called when a component is unmounted.

### 7. What is the most common built-in mounting life cycle method?

- contructor()
- render()
- componentDidMount()

### 8. What are the mounting life cycle methods?

- contructor(): the constructor() method is executed before any other methods, when component is initiated and it is the place where to set the initial state and other values.

- static getDerivedStateFromProps(): the static getDerivedStateFromProps() method is called right before rendering the component in the DOM. This the right place to set the state object based on the initial props.

- render(): the render() method is a required method when we create a class-based component. The render method is where we return JSX.

- componentDidMount(): the componentDidMount() method is called after component is render. This a place place to setting time interval and calling API.

### 9. What are the updating life cycle methods?

- static getDerivedStateFromProps(): similar to the mounting phase, getDerivedStateFromProps can be also called in the updating phase, and is the first method that is called when a component gets updated.

- shouldComponentUpdate(): the shouldComponentUpdate() built-in life cycle method should return a boolean. If this method does not return true the application will not update.

- render(): the render() method is called when a component gets updated.

- getSnapshotBeforeUpdate(): this method is called before the rendering of the component and after it is updated. This method is majorly used to compare the previous state or the previous props of the component with the new state or the new received props.

[tutorialspoint - getSnapshotBeforeUpdate](https://www.tutorialspoint.com/reactjs-getsnapshotbeforeupdate-method#:~:text=This%20method%20is%20called%20before,or%20the%20new%20received%20props.)

- componentDidUpdate(): the componentDidUpdate method takes two parameters: the prevProps and prevState. It is called after the component is updated in the DOM.

### 10. What is the unmounting life cycle method?

The unmounting phase removes component from the DOM.
The _componentWillUnmount_ method is the only built-in method that gets called when a component is unmounted.