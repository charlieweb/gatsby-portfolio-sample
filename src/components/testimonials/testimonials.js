import React from 'react';
import PropTypes from 'prop-types';
import './testimonial.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Testimonials = ({ author, company, jobtitle, description }) => {
  return(
   
   <div className="testimonial">
     <div className="testimonial__description">
       <div className="icon">
        <FontAwesomeIcon icon={["fas", "quote-left"]} />
       </div>
        <div className="text">{ description }</div> 
     </div>
     <div className="testimonial__author">
        { author }
     </div>
     <div className="testimonial__info">
         <span>{jobtitle}</span>
         <span>{company}</span>
     </div>
   </div>
  );
}

Testimonials.propTypes = {
  author: PropTypes.string,
  company: PropTypes.string,
  jobtitle: PropTypes.string,
  description: PropTypes.string,
}

export default Testimonials
