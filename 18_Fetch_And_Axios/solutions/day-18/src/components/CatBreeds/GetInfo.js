import React from 'react'

const GetInfo = ({cat: {name, weight, life_span, origin}}) => {
  return (
    <figcaption className="fig--container" key={id}>
        <p className="description">
          name:
          <span>{name}</span>
        </p>
        <p className="description">
          weight:
          <span>{weight}</span>
        </p>
        <p className="description">
          life span:
          <span>{life_span}</span>
        </p>
        <p className="description">
          origin:
          <span>{origin}</span>
        </p>
      </figcaption>
  )
}

export default GetInfo