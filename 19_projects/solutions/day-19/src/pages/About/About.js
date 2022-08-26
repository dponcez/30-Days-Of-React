import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div className="About">
      <section className="About--container">
        <h3 className="About--title">
          <a href="#" className="link">
            #
          </a>
          introduction
        </h3>
        <article className="introduction">
          <p className="description">
            30 Days Of React challenge is a step by step guide to learn React.
            Students will have a chance to learn how React works, work on
            exercises and build different applications. In addition, this
            challenge induce students to write a clean JavaScript code. By the
            end of the challenge, students can claim for certificate. Students
            will develop different complicated applications which can prepare
            them for a Junior Software developer role.In 30 Days of React
            challenge, students will learn:
          </p>
          <ul className="list">
            <li className="item">What is React?</li>
            <li className="item">JSX Elements</li>
            <li className="item">Rendering JSX Elements?</li>
            <li className="item">Injecting data to JSX elements</li>
            <li className="item">Style and className</li>
            <li className="item">Components</li>
            <li className="item">Functional Components</li>
            <li className="item">Props</li>
            <li className="item">Class-based Components</li>
            <li className="item">States</li>
            <li className="item">Event</li>
            <li className="item">Form</li>
            <li className="item">Conditional Rendering</li>
            <li className="item">Controlled and Uncontrolled Input</li>
            <li className="item">Component Life Cycle</li>
            <li className="item">React Router</li>
            <li className="item">React Hooks</li>
          </ul>
        </article>
      </section>
      <section className="About--container">
        <h3 className="About--title">
          <a href="#" className="link">
            #
          </a>
          React
        </h3>
        <article className='library'>
          <p className="description">
            React is a JavaScript library for building a reusable user
            interface(UI).
          </p>
        </article>
      </section>
      <section className="About--container">
        <h3 className="About--title">
          <a href="#" className="link">
            #
          </a>
          necessary packages to build this application
        </h3>
        <article className="packages">
          <pre>$ yarn add node-sass</pre>
          <pre>$ yarn add moment</pre>
          <pre>$ yarn add react-router-dom</pre>
          <pre>$ yarn add axios</pre>
        </article>
      </section>
      <section className="About--container">
        <h3 className="About--title">
          <a href="#" className="link">
            #
          </a>
          check out the official website to learn more bout react
        </h3>
        <article className="official--website">
          <p className="description">React official website <a className='link' href="https://reactjs.org" target="_blank">react</a>
          </p>
        </article>
      </section>
      <section className="About--container">
        <h3 className="About--title">
          <a href="#" className='link'>#</a>
          front end
        </h3>
        <article className="packages">
          <p className="description">
            This challenge includes only front end technologies. The front end
            part of this application we used are HTML, CSS, Sass, JavaScript and
            React JS. React is a library for building user interfaces. Check the
            official website of <a className='link' href="https://reactjs.org">React</a>.
            Necessary packages for the front end part:
          </p>
          <pre>$ yarn add react-router-dom</pre>
          <pre>$ yarn add axios</pre>
        </article>
      </section>
      <section className="About--container">
        <h3 className="About--title">
          <a href="#" className='link'>#</a>
          telegram group
        </h3>
        <article className="telegram">
          <p className="description">
            The telegram group is very active and a very good learning
            environment. Join the telegram group to get help or help others.{" "}
            <a href="https://t.me/thirtydaysofreact" className="link">
              {" "}
              Telegram group
            </a>
          </p>
        </article>
      </section>
      <section className="About--container">
        <h3 className="About--title">
          <a href="#" className='link'>#</a>
          the 30 days of teact challenge repository can be found here
        </h3>
        <article className="challenge">
          <p className="description">
            Check the repository on
            <a
              href="https://github.com/Asabeneh/30-Days-Of-React"
              className="link"
              target="_blank"
            >
              github
            </a>
          </p>
        </article>
      </section>
    </div>
  );
}

export default About