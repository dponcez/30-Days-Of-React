# React.js

## What is React?

#### What is React?

React is a JavaScript library to help developers to create reusable User Interface <strong>(UI)</strong>. Created by Facebook on May 29, 2013. The current version of React is <strong>18.1.0</strong>.

#### What is a library?

It's a collection of components to help to create User Interface <strong>(UI)</strong> and let developers to work on the Virtual DOM, to make changes and it updates only the element that need changing.

#### What is a single page application?

A single page application <strong>(SPA)</strong> is a web application or website to interact with the user by dynamically writting the current web page with new data from the web server. [wikipedia](https://en.wikipedia.org/wiki/Single-page_application).

#### What is a component?

Components are <strong>independent</strong> and allow developers to   <strong>reuse</strong> a piece of code, component serves the same purpose as JavaScript functions. Component come into two categories or types: <em>Class Components</em> and <em>Function Components</em>.

### What is the latest version of React?

The current version of React is <strong>18.1.0</strong>

#### What is DOM?

Is the way how developers or programmers can interact with the document and make changes on it, adding or removing nodes from the document structure, even manipulating styles and its content.

#### What is React Virtual DOM?

A virtual DOM <strong>(VDOM)</strong> is a lightweight JavaScript representation of the Document Object Model used in declarative web frameworks such as Vue.js, and Elm. Updating the virtual DOM is comparatively faster than updating the actual DOM. [wikipedia](https://en.wikipedia.org/wiki/Virtual_DOM).

#### What does a web application or a website(composed of) have?

Web application:  is a piece of software that can be accessed by the browser and needs authentication to use a combination of server-side and client-side, to represent information. It requires a server to manage requests from the users. 
Example: Google Apps, Amazon, YouTube.

Website: it can be consist of one page, two pages, and n number of pages and provides visual context that users can view and read. To view a website it requires a browser(Chrome, Firefox, Edge, Safari). [geeksforgeeks](https://www.geeksforgeeks.org/difference-between-web-application-and-website/#:~:text=It%20can%20be%20consist%20of,browser(Chrome%2C%20Firefox).).

----

## Why React?

#### Why did you chose to use react?

I chose React because it's a popular JavaScript Library and help developers create a UI compentent and is easy to learn.

#### What measures do you use to know popularity?

I don't use any measure to know its popularity, but it has a huge community around the world, some developers use StackOverflow to measure its popularity, other use GitHub, I think it depends of each developers to measure a popularity of a library or framework.

#### What is more popular, React or Vue?

I think both has a great popularity in the community, but React has been growth its popularity more than Vue.

-------

## JSX

#### What is an HTML element?

<strong>HTML</strong> element represent the <em>root</em> of the document, represented by nodes, each node has a <em>parentNode</em>, and <em>childNodes</em>, each HTML element has an <strong>attribute</strong>, it can be a <strong>alt</strong>, <strong>href</strong>, <strong>src</strong> etc. It also can be hold a metadata using the <strong>data-</strong>.

#### How to write a self closing HTML elements?

In HTML elements, not every element has a closing tag, these tags use slash '/' to enclosed an element. The following are an examples of them.
```html
<img/>
<br/>
<hr/>
<input/>
<meta/>
<area/>
<link/>
<base/>
```

#### What is an HTML attribute?

Each HTML element can have an attribute, these attribute provide additional information about elements.

* href
    * anchors
    * links
* src
    * images
    * script
* width
    * images
* height
    * images
* alt
    * images
* title
    * headings
    * paragraphs
    * buttons
* style
    * headings
    * paragraphs
    * buttons
    * span
* lang
    * html

#### What is JSX?

<strong>JSX</strong> stands for JavaScript <strong>XML</strong> and allows developers to write HTML elements with JavaScript code. This syntax provide a way to structure our components redering that makes it easier to write and add HTML elements in React, using <strong>babel</strong> as a compiler or transpiler. JSX also has an opening and closing tags, content and attribute like an HTML elements, but not every HTML elements has a closing tags, they are called self closing tags.

#### What is babel?

Babel is a toolchain which transpiles JSX to pure JavaScript to older version that can be run by older JavaScript Engines, like Internet Explorer (IE).

#### What is a transpiler?

Is the way how a JSX is converted as pure JavaScript code, using a toolchain like babel.

---------

## JSX Elements

#### What is a JSX Elements?

JSX allows developer to write HTML elements in JavaScript without any createElement() and/or appendChild() method, JSX is not required, but makes it easier to write React Applications.

#### Write your name in a JSX element and store it in a name variable

```js
const name = 'Damian'
const jsxElement = <h1>{name}</h1>
```

#### Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable

```js
const fullName = 'Damian Ponce'
const country = 'Colombia'
const title = 'Newbie Developer'
const gender = 'Male'
const email = 'dcontact@hotmail.com'
const phoneNumber = '321-009-878'

const user = (
    <header>
        <h1>{fullName}</h1>
        <p>{country}</p>
        <p>{title}</p>
        <p>{gender}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
    </header>
)
```

#### Write a footer JSX element

```js
const footer = (
    <footer>footer</footer>
)
```

----------

## Inline Style

#### Create a style object for the main JSX

```js
const mainStyles = {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: '1.25rem',
    fontWeight: 'normal'
}

const main = (
    <main style={mainStyles}>
        <p>main</p>
    </main>
)

```

#### Create a style object for the footer and app JSX

```js
const footerStyles = {
    borderTop: '.2rem solid #ecf0f1',
    background: '#3498db',
    color: '#fff',
    fontSize: '1rem'
}

const footer = (
    <footer style={footerStyles}>
        <p>Copyright - 2022</p>
    </footer>
)

const appStyles = {
    padding: '.5rem 1.5rem,
    margin: 'auto'
}

const app = (
    <div style={appStyles}>
        {header}
        {main}
        {footer}
    </div>
)
```

#### Add more styles to the JSX elements

```js
const styles = {
    padding: '1rem 1.5rem',
    margin: 'auto',
    background: '#949003',
    color: '#fff',
    width: '100%',
    height: 'auto',
    fontSize: '1.5rem',
    fontWeight: 400,
    textTransform: 'capitalize',
    border: '.2rem solid #ecf0f1',
    borderRadius: 'none'
}
```

-----

## Internal Styles

#### Apply defferent styles to your JSX elements

```html
<!DOCTYPE hml>
<html>
    <head>
        <meta charset="utf-8"/>
        <meta name="viewpor" content="width=device-width, initial-scale=1.0"/>
        <title>React Challenge</title>
        <link href="https:/fonts.googleapis.com/css2?family=Montserrat:300,400&display=swap" rel="stylesheet"/>
        <style>
            *,
            *::before,
            *::after { box-sizing: border-box; }

            html,
            body {
                height: 100vh;
            }

            body {
                margin: 0;
                overflow: auto;
                line-height: 1.5;
            }

            .header {
                border-radius: 0;
                border-bottom: .1rem solid #f5f5f5;
                padding: 0;
                margin: 0;
                height: 100%;
                max-height: 35rem;
                background: #439898;
            }

            .heading {
                font-size: 2rem;
                font-weight: 500;
                color: #fff;
                text-transform: capitalize;
            }

            .main {
                border-top: .1rem solid #f5f5f5;
                background: #fff;
                height: 100%;
            }

            ul {
                padding: 1rem 0;
                display: block;
            }

            li {
                list-style: none;
                padding: 0;
                font-size: 1rem;
                font-weight: normal
            }

            .footer {
                width: 100%;
                height: 100%;
                max-height: 15rem;
                background: #3498db;
            }

            p {
                font-size: 1rem;
                font-weight: normal;
                padding: 0;
                letter-spacing: .1rem;
            }
        </style>
    </head>
    <body>
        <div id="root"></div>
        <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
        const rootElement = document.getElementById('root')

        const header = (
            <header className="header">
                <h1 className="heading">heading</h1>
            </header>
        )

        const main = (
            <main className="main">
                <div>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>React</li>
                    </ul>
                </div>
            </main>
        )

        const footer = (
            <footer className="footer">
                <p>Copyright 2022</p>
            </footer>
        )

        const app = (
            {header}
            {main}
            {footer}
        )

        ReactDOM.render(
            app,
            rootElement
        )
    </script>
    </body>
</html>
```

-----

## Inject data to JSX

#### Practice how to make JSX element and injecting dynamic data (string, number, boolean, array, object)

```html
<!DOCTYPE hml>
<html>
    <head>
        <meta charset="utf-8"/>
        <meta name="viewpor" content="width=device-width, initial-scale=1.0"/>
        <title>React Challenge</title>
        <link href="https:/fonts.googleapis.com/css?family=Montserrat:300,400&display=swap" rel="stylesheet"/>
        <style>
            *,
            *::before,
            *::after { box-sizing: border-box; }

            html,
            body {
                height: 100vh;
            }

            body {
                margin: 0;
                overflow: auto;
                line-height: 1.5;
            }

            .header {
                border-radius: 0;
                border-bottom: .1rem solid #f5f5f5;
                padding: 0;
                margin: 0;
                height: 100%;
                max-height: 35rem;
                background: #439898;
            }

            .heading {
                font-size: 2rem;
                font-weight: 500;
                color: #fff;
                text-transform: capitalize;
            }

            .main {
                border-top: .1rem solid #f5f5f5;
                background: #fff;
                height: 100%;
            }

            ul {
                padding: 1rem 0;
                display: block;
            }

            li {
                list-style: none;
                padding: 0;
                font-size: 1rem;
                font-weight: normal
            }

            .footer {
                width: 100%;
                height: 100%;
                max-height: 15rem;
                background: #3498db;
            }

            p {
                font-size: 1rem;
                font-weight: normal;
                padding: 0;
                letter-spacing: .1rem;
            }
        </style>
    </head>
    <body>
        <div id="root"></div>
        <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">

        // Injecting dynamical data
        const string = 'React challenge'
        const numOne = 2
        const numTwo = 4
        const falsy = false
        const truty = true
        const web_techs = [
            'HTML',
            'CSS',
            'JS',
            'React
        ]
        const author = {
            fName: 'Damian',
            lName: 'Ponce'
        }

        const result = (
            <p>
                {numOne} * {numTwo} = {numOne * numTwo}
            </p>
        )
        
        const header = (
            <header className="header">
                <h1 className="heading">{string}</h1>
            </header>
        )

        const main = (
            <main className="main">
                <div>
                    <ul>
                        {web_techs.map(techs => <div>{techs}</div>)}
                    </ul>
                    <p>Active account: {truty}</p>
                    <p>Login: {falsy}</p>
                </div>
                result: {result}
            </main>
        )

        const footer = (
            <footer className="footer">
                <p>Copyright 2022</p>
                <p>{author.fName} {author.lName}</p>
            </footer>
        )

        const app = (
            <div>
                {header}
                {main}
                {footer}
            </div>
        )

        const rootElement = document.getElementById('root')

        ReactDOM.render(
            app,
            rootElement
        )
    </script>
    </body>
</html>
```