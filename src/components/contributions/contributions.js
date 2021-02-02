import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../hooks/font-awesome';
import './contrib.scss';

const Contributions = ({ id, link, description, author, profileImage }) => {
 
  return(
    <>
     <div className="contrib-item" key = {id }>
        <div className="contrib-item__name">
          <a href={link.uri} rel="noopener noreferrer nofollow" target="_blank">{link.title} 
          <FontAwesomeIcon icon={["fas", "arrow-circle-right"]} />
          </a>
        </div>
        
         {
          description &&
           <div className="contrib-item__description" dangerouslySetInnerHTML={{__html: description}}/>
         }

         <div className="contrib-item__profile">
           <div className="contrib-item__img">
            <Img fluid={profileImage} />
           </div>
           <div className="contrib-item__author">
            {author.name }
           </div>
         </div>
       
     </div>
    </>
  );

}


Contributions.propTypes = {
  link: PropTypes.object,
  profileImage: PropTypes.object,
}

export default Contributions;