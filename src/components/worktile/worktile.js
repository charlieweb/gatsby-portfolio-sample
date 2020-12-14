import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image';
import './worktile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../hooks/font-awesome';

const WorkTile = ({title, link, image, logo, text}) => {
  return(
      <div className="worktile">
        <div className="worktile__brand">
          <Link to={link}>
          <div className="worktile__image">
            {logo && 

            <Img fluid={image} />
            }
          
          </div>
          </Link>
          <div className="worktile__logo">
            { logo && 
              <Img fluid={logo} />
            }
            
          </div>
        </div>
        <div className="worktile__info">
          
          <div className="worktile__title">
            <Link to={link}>
              {title }
               <FontAwesomeIcon icon={["fas", "arrow-circle-right"]} />
            </Link>
          </div>
         
          <div className="worktile__text">
            {text}
          </div>
        </div>
          
      </div>
  )
}

WorkTile.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  logo: PropTypes.object,
}

export default WorkTile