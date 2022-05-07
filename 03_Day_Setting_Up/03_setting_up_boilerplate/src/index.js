import React from 'react';
import { createRoot } from 'react-dom/client';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import jsLogo from './images/js_logo.png';
import reactLogo from './images/react_logo.png';

const jsxHeading = 'react challenge'
const sub_heading = 'getting started with react'
const webTechs = ['HTML', 'CSS', 'JS', 'React']
const user = {
    fName: 'Damian',
    lName: 'Ponce'
}

const header = (
    <header className="header">
        <h1 className="heading">{jsxHeading}</h1>
        <h2 className="sub--heading">{sub_heading}</h2>
    </header>
)

const main = (
    <main className="main">
        <>
            <ul className="list">
                {webTechs.map(techs => <li key={techs}>{techs}</li>)}
            </ul>
            <h3>front end technologies</h3>
            <div className='images--container'>
                <img className="image" src={htmlLogo} alt="html logo"/>
                <img className="image" src={cssLogo} alt="css logo"/>
                <img className="image" src={jsLogo} alt="js logo"/>
                <img className="image" src={reactLogo} alt="react logo"/>
            </div>
        </>
    </main>
)

const footer = (
    <footer className="footer">
        <p>copyright - 2022</p>
        <p>{user.fName} {user.lName}</p>
    </footer>
)

const app = (
    <div className="container">
        {header}
        {main}
        {footer}
    </div>
)

const container = document.getElementById('root');
const root = createRoot(container);
root.render(app)