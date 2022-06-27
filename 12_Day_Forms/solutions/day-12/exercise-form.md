# Forms

### 1. What is the importance of form?

Form is important, because a user can send or receive an information from others, even with forms we can apply for a job.

### 2. How many input types do you know?

```html
<input type="text" />
<input type="number" />
<input type="range" />

<input type="email" />
<input type="password" />
<input type="tel" />

<input type="checkbox" />
<input type="radio" />

<input type="color" />

<input type="url" />
<input type="image" />
<input type="file" />

<input type="hidden" />

<input type="date" />
<input type="datetime-local" />
<input type="month" />
<input type="week" />
<input type="time" />

<input type="reset" />
<input type="search" />
<input type="submit" />
<input type="button" />
```

### 3. Mention at least four attributes of an input element

- value
- name
- min
- max
- placeholder

### 4. What is the importance of htmlFor?

If the __htmlFor__ of an label has been linked with an input field, the input field will receive the focus when we click on label.

### 5. Write an input type which is not given in the example if there is?

The input fields are complete.

### 6. What is a controlled input?

Controlled input is an input that gets its value from a single source, it means we can focus but can't change it, to make the input works as expected we have to use onChange handler and update the state.

Source: [krasimir-gitbooks](https://krasimir.gitbooks.io/react-in-patterns/content/chapter-05/)

### 7. What do you need to write a controlled input?

We need to use _onChange_ handler to update the state to get data from a controlled input.

### 8. What event type do you use to listen changes on an input field?

```js 
<input onChange={}/>
```

### 9. What is the value of a checked checkbox?

The value of a checked attribute on a checkbox type, is default.

### 10. When do you use onChange, onBlur, onSubmit?

- onChange: it's use to update the state on the input field.
- onBlur: is fired when when focus has left the element inside of it. 
- onSubmit: it's use to prevent the default behavior of a form.

### 11. What is the purpose of writing e.preventDefault() inside the submit handler method?

_preventDefault()_ helps us to avoid the default behavior of a form element, which is to continuously realod the page.
### 12. How do you bind data in React? The first input field example is data binding in React.

Data binding is the process of connecting the view element or user interface.

source: [geeksforgeeks](https://www.geeksforgeeks.org/reactjs-data-binding/)

### 13. What is validation?

Validation is the action or process of checking the validity of something.

### 14. What is the event type you use to listen when an input changes?

We use the onChange event to update the state of a data.

### 15. What are event types do you use to validate an input?

Validation can be done in client or server side, we using React to implement the client validation.
A validation can implement using HTML5 built-in validation or using JavaScript (regulat expression).