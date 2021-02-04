import React from 'react'
import Img from 'gatsby-image';

const Image = props => {
  const {
    image,
    align,
    alt,
  } = props 
  return (
    <div data-vertical-alignment={align} className="image__wrapper">
      <Img fluid={image} alt={alt}/>
    </div>
  );
} 

export default Image;