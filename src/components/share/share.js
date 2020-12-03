import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../hooks/font-awesome';
import './share.scss';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'

const ShareButtons = ({title, url, twitterHandle}) => {
    return(
        <div className="social__share">
          <FacebookShareButton url={url} >
              <span className="icon">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
              </span>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle}>
            <span className="icon">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </span>
            
          </TwitterShareButton>

          <LinkedinShareButton url={url} title= {title} >
           <span className="icon">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </span>
          </LinkedinShareButton>
        </div>
      )

}

ShareButtons.propTypes = {
  twitterHandle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ShareButtons