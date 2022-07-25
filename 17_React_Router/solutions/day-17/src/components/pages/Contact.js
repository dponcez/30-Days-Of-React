import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import '../../styles/Contact.scss'

const Contact = () => {
  return (
    <div className="Contact--container">
      <form className="form--container">
        <div className="formGroup">
          <input id="firstname" type="text" name="firstname" />
          <label htmlFor="firstname">first name</label>
        </div>
        <div className="formGroup">
          <input id="lastname" type="text" name="lastname" />
          <label htmlFor="lastname">last name</label>
        </div>
        <div className="formGroup">
          <textarea id="message" name="bio" cols="120" row="20"></textarea>
          <label htmlFor="message">message</label>
        </div>
        <button type="button">send message</button>
      </form>
      <div className="social--media__container">
        <h2>get in touch</h2>
        <div className="social--media">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact