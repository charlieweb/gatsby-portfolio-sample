import React from 'react';
import PropTypes from 'prop-types'
import {Link } from 'gatsby'

const Linksblock = ({ links }) => (
  <div className="link__block">
    <ul>
      {links && links.map(({title, uri}) =>
           <li key={uri} className="link__item">
           
           <Link to={uri.replace('internal:', '')}>{title}</Link>
          </li>
         
      )}
      
    </ul>
  </div>
)


Linksblock.propTypes = {
  title: PropTypes.string,
  link: PropTypes.object,
}
export default Linksblock