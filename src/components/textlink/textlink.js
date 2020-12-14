import React from 'react'
import PropTypes from 'prop-types'
import {Link } from 'gatsby'
import './textlink.scss';
import '../../hooks/font-awesome';
import Helmet from 'react-helmet';
const TextLink = ({title, link, description}) => {
 return(
    <>
    <Helmet>
            <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/solid.min.css"
            />
    </Helmet>
    <div className="textlink">
      <h3>{title}</h3>
      <div className="textlink__description">
         <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="textlink__link">
        <Link to={link.uri_alias}>{link.title}</Link>
      </div>
    </div>
    </>
 )
}
TextLink.propTypes = {
  titkle: PropTypes.string,
  description: PropTypes.string,
}


export default TextLink