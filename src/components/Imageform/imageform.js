import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import './imageform.scss';

const ImgFormText = ({textleft,textright, bgImage}) => {

  return (bgImage ?
        <BackgroundImage
            Tag={`div`}
            fluid={bgImage}
            data-has-background-image={typeof bgImage !== 'undefined'}
            className='background__form-text'
            
        >
        <div data-column-arrangement="two--equal" data-content-width="100" className="slice__row  img__form-text">
            <div className="left__content">
              <div dangerouslySetInnerHTML={{ __html: textleft }} />
            </div>
            <div className="right__content">
              <div dangerouslySetInnerHTML={{ __html: textright }} />
            </div>
        </div>
        </BackgroundImage>
    :
       <div data-column-arrangement="two--equal" data-content-width="100" className="slice__row  img__form-text">
          <div className="left__content">
             <div dangerouslySetInnerHTML={{ __html: textleft }} />
          </div>
          <div className="right__content">
            <div dangerouslySetInnerHTML={{ __html: textright }} />
          </div>
       </div>
    );
}

ImgFormText.propTypes = {
  textleft: PropTypes.string,
  textright: PropTypes.string,
  bgImage: PropTypes.object,
}

export default ImgFormText