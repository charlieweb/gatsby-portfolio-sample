import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import './imageform.scss';
import MailchimpForm from '../mailchimp/mailchimpForm';

const ImgFormText = ({textleft,textright, bgImage}) => {

  return (bgImage ?
        <BackgroundImage
            Tag={`div`}
            fluid={bgImage}
            data-has-background-image={typeof bgImage !== 'undefined'}
            className='background__form-text'
            
        >
        <div className="container">
          <div className="img__form-text row">
              <div className="left__content col-md-7 col-sm-12">
                <div dangerouslySetInnerHTML={{ __html: textleft }} />
              </div>
              <div className="right__content col-sm-12 col-md-4 offset-md-1">
                <h3>Stay Connected</h3>
                <MailchimpForm/>
                <div dangerouslySetInnerHTML={{ __html: textright }} />
              </div>
          </div>
        </div>
        </BackgroundImage>
    :
       <div className="container">
          <div className="img__form-text row">
              <div className="left__content col-md-8 col-sm-12">
                <div dangerouslySetInnerHTML={{ __html: textleft }} />
              </div>
              <div className="right__content col-sm-12 col-md-3 offset-md-1">
                <h3>Stay Connected</h3>
                <MailchimpForm/>
                <div dangerouslySetInnerHTML={{ __html: textright }} />
              </div>
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