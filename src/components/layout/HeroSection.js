import React from 'react'
import PropTypes from 'prop-types'
import SliceWrapper from '../slice/SliceWrapper'
import Breadcrumb from '../breadcrumb/breadcrumb'

const HeroSection = ({breadcrumb, title, backgroundColor,  textColor,  children}) => (
  <div className="hero__wrapper">
   <SliceWrapper backgroundColor={backgroundColor} textColor={textColor}>
     <div className="hero">
       <div className="hero__inner">
         <div contentWidth={80}>
           { breadcrumb && <Breadcrumb>{breadcrumb}</Breadcrumb>}
          { title && <h1 className="page-title">{title}</h1>}
         </div>
          { children }
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