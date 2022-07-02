# Uncontrolled Input

### 1. What is a controlled input?

Controlled input is an input that gets its value from a single source, it means we can focus but can't change it, to make the input works as expected we have to use onChange handler and update the state.

Source: [krasimir-gitbooks](https://krasimir.gitbooks.io/react-in-patterns/content/chapter-05/)
### 2. What is an uncontrolled input?

To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM. In uncontrolled input we get data from input fields like traditional HTML form data handling.

### 3. How do you get a content of a certain HTML element in React ?

React implements a browser-independent DOM system for performance and cross-browser compatibility. We took the opportunity to clean up a few rough edges in browser DOM implementations.
[Dom-elements](https://reactjs.org/docs/dom-elements.html)

### 4. Why it is not a good idea to touch the DOM directly in React?

It is not good idea to touch the _DOM_ directly, because we'll stay play with the real DOM and not with the _Virtual DOM_ in React, and may cause wierd behavior in our React components.

It's recommended to use __Controlled Input_ to avoid work with the _Real DOM_

### 5. What is most frequently used in React ? Controlled or Uncontrolled input.

Most the time it used __controlled input__ instead of __uncontrolled__
### 6. What do you need to write uncontrolled input?

If we are using class component instead of functional component, we must use or import _createRef_ to create an uncontrolled input to manipulate the __DOM__, but in other hand, if we are using functional components, we have to include or import _useRef_ as part of react.

### 7. Does state require to write uncontrolled input?

_setState_ should not be use.

[goshacmd - Controlled Vs. Uncontrolled Input](https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/)

### 8. When do you use uncontrolled input?

You can use _uncontrolled input_ when you are learning React, or working on a simple form in the real world.

Reference: [gosh - uncontrolled_input](https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/)

### 9. When do you use controlled input?

In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

[Controlled Input](https://reactjs.org/docs/forms.html#controlled-components)

### 10. Do you use a controlled or uncontrolled input to validate form input fields?

We use controlled input to validate form input fields, when we use controlled input we are using the _Virtual DOM_ instead of _Real DOM_.