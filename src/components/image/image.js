import React from 'react'
import Img from 'gatsby-image';

const Image = props => {
  const {
    horizontal_align,
    image,
    imageMaxWidth,
    align
  } = props 
  return (
    <div data-vertical-alignment={align}>
      
      <Img fluid={image} style={{
                maxWidth: horizontal_align === 'center' ? imageMaxWidth : 'none'
            }} />
    </div>
  );
} 

export default Image;