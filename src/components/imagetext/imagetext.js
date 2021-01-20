import React from 'react';
import PropTypes from 'prop-types'
import {Link } from 'gatsby'
import Img from 'gatsby-image';
import './imagetext.scss';
 
const ImageText = ({ title, links, imagelayout, image, description, BGcolor, alt }) => {
  let url
  if (links !== null) {
    if( links.uri.includes('internal:')) {
     url = links.uri.replace('internal:', '');
    
    }
    else if (links.uri.includes('entity:')) {
      url = links.uri_alias
    }
    else {
      url = links.uri_alias
    }
  }
  
  return (
    <div data-layout={imagelayout} className="image-title-text">
      
        <div className="image-title-text__content">
          <h2 className="image-title-text__title">
          {
            links && 
              <Link to={url}> 
              {title}
              </Link>
          }
          {
            !links && title
          }
          </h2>
           {
             description &&
              <div className="image-title-text__text" dangerouslySetInnerHTML={{__html: description}}/>
           }
        </div>
         { image &&
          <div className="image-title-text__image" data-bg-color={BGcolor}>
            <Img fluid={image} alt= {alt} />
          </div>
         }
    </div>
      
  );
}
ImageText.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  links: PropTypes.object,
}
export default ImageText