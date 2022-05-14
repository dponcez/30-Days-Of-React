import React from 'react'
import '../styles/images.css'

const Images = ({title, techs}) => (
  <article className="front--end">
    <h4 className="title">{title}</h4>
    <div className="images--container">
      <img className="image" src={techs.html} alt={techs.html}/>
      <img className="image" src={techs.css} alt={techs.css}/>
      <img className="image" src={techs.js} alt={techs.js}/>
      <img className="image" src={techs.react} alt={techs.react}/>
    </div>
  </article>
)

export default Images