import React from 'react'
import PropTypes from 'prop-types'

const Text = props => {
  const {
    text,
    align
  } = props 
  
  return (
      <div data-vertical-alignment = { align }  className="paragraph__text">
         <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
  );
}

Text.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
}

export default Text
