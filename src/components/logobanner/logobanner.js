import React from 'react';
import PropTypes from 'prop-types'
import Img from 'gatsby-image';
import './logobanner.scss';

const LogoBanner = ({ backgroundColor, logo, backgroundImage }) => {
 const bgcolor = {
    backgroundColor: backgroundColor,
  }
  return(
    <>
      <div className="logo__banner" style={bgcolor}>
        <div className="logo__image">
          <Img fluid={logo} />
        </div>
        <div className="background__image">
          <Img fluid={backgroundImage} />
        </div>
      </div>
    </>
  );

}


LogoBanner.propTypes = {
  logo: PropTypes.object,
  backgroundImage: PropTypes.object,
}

export default LogoBanner