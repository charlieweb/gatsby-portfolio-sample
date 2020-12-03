import React from 'react'
import './colorbox.scss';


const Colorbox = ({ backgroundColor , textColor, internalSpacing , boxContent }) => {
  const bgcolor = {
    backgroundColor: backgroundColor,
  }
  return (
    <div className='colored-box' data-internal-spacing={internalSpacing} data-text-color={textColor} style={bgcolor}>
      {boxContent }
    </div>
  );
} 

export default Colorbox;