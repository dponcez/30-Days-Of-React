# Higher Order Component

<img src='https://miro.medium.com/max/1400/1*uz8ZGnYPws-P7vr2XHv16Q.png' alt='<Higher Order Component by Anil Kumar - Medium'/>
Image from: <a href='https://anil-pace.medium.com/hof-and-hoc-in-react-4de1e27e5a4e' target='_blank'>Anil Kumar - Medium</a>
#### 1. What is higher order function?

In JavaScript, a higher order function is a function that takes another function as a parameter or return another function.
Some examples of Higher Order Function are the following:
- .forEach()
- .map()
- .filter()
- .reduce()

Resource: [freecodecamp - HOFs](https://www.freecodecamp.org/news/higher-order-functions-what-they-are-and-a-react-example-1d2579faf101/)

#### 2. What is Higher Order Component?

A higher order component takes a component and return another component.
Most of the time third party libraries use higher order component. For instance redux, react-router-dom and material-u use higher order component.
A HOC is a pure function. It has no side effects, returning only a new component.
Resource: [smashingmagazine - HOCs](https://www.smashingmagazine.com/2020/06/higher-order-components-react/)
#### 3. What is the difference between higher order function and higher order component?

__HOC__ and __HOF__ has similarities, because both takes a function or component as a parameter and return a result.

The following information was taken from  [tutorialspoint - HOCs](https://www.tutorialspoint.com/reactjs/reactjs_higher_order_components.htm).
Higher order components are JavaScript functions used for adding additional functionalities to the existing component. These functions are pure, which means they are receiving data and returning values according to that data. If the data changes, higher order functions are re-run with different data input.


#### 4. A higher order component can allow us to enhance a component. (T or F)
Yes.