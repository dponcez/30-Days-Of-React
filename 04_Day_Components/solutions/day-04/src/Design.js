import React from 'react';
import './styles/design.css';

const Design = () => {
  return (
    <article className="background">
      <div className="subscribe--container">
        <h1 className="subscribe">subscribe</h1>
        <p className="text">Sign up with your email address to receive news and updates.</p>
        <form className="subscribe--form">
            <div className="input--container">
                <input type="text" name="fname" placeholder="Full name"/>
                <input type="text" name="lname" placeholder="Last name"/>
                <input type="email" name="email" placeholder="Email"/>
            </div>
            <button className="subscribe--btn">Subscribe</button>
        </form>
      </div>
    </article>
  )
}

export default Design