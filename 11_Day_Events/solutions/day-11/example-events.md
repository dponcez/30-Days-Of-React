# Events

#### What is an event?

An event is an action reconigzed by a software, when we use a computer such as clicking on a button, hover on a image, pressing a keyboard, scrolling the mouse wheel and etc.

#### What is the different between an HTML element event and React event?

The difference between HTML and React events is that you cannot return false to prevent default behavior in React, you have to call <em>preventDefault()</em> explicitly, and also in React events are use in <em>camelCase</em> instead of <em>lowercase</em>

#### Write at least 4 keyboard events

- onKeyDown.
- onClick.
- onKeyPress.
- onKeyUp.

#### Write at least 8 mouse events

- onMouseMove.
- onMouseUp.
- onMousePress.
- onMouseEnter.
- onMouseLeave.
- onMouseOut.
- onMouseDown.

#### What are the most common mouse and keyboard events?

- onClick.
- onMouseEnter.
- onMouseLeave.

#### Write an event specific to input element

- onChange.

```js
<input type="text" onChange={}/>
```

#### Write an event specific to form element

- onSubmit.

```js
<form  onSubmit={}></form>
```

#### Display the coordinate of the view port when a mouse is moving on the body?

#### What is the difference between onInput, onChange and onBlur?

- onInput: occurs immediately after the value of an element has changed.

- onBlur: occurs when an object loses focus. The onBlur event is most often used with form validation code.

- onChange: occurs when the element loses focus after the content has been changed.

#### Where do we put the onSubmit event ?

We put the onSubmit on form elements to prevent the default behavior.