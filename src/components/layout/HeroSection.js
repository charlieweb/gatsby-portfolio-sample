import React from 'react'
import PropTypes from 'prop-types'
import SliceWrapper from '../slice/SliceWrapper'

const HeroSection = ({title, backgroundColor,  textColor, backgroundImage, children}) => (
  
  <div className="hero__wrapper">
   <SliceWrapper backgroundColor={backgroundColor} textColor={textColor} backgroundImage={backgroundImage}>
     <div className="hero">
       <div className="hero__inner">
         <div className='container'>
          { title && <h1 className="page-title">{title}</h1>}
         </div>
         <div className="container">
            { children }
         </div>
          
       </div>
     </div>
    
   </SliceWrapper>
  </div>
);

HeroSection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default HeroSection;