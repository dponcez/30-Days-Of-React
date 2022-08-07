import React from 'react'

const LoadCatInfo = (
  {cat: {url, name, 
    weight, life_span, origin}
  }
) => {
  return (
    <figure className="figure">
      <img src={url} alt={name}/>
      <figcaption className="fig--container">
        <p className="description">
          name:
          <span>{name}</span>
        </p>
        <p className="description">
          weight:
          <span>{weight.metric}</span>
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
    </figure>
  );
}

export default LoadCatInfo