import React from 'react';
import PropTypes from 'prop-types'
import {Link } from 'gatsby'

const Linksblock = ({ title, link }) => (
  <ul>
    <li>
      <Link to={link.replace('internal:', '')}>{title}</Link>
      <svg width="35" height="35" className="icon icon-angle-right" role="img"
        aria-label="Angle-Right">
        <svg id="icon-angle-right" viewBox="0 0 9 28"><title>angle-right</title><path d="M9.297 15a.54.54 0 0 1-.156.359L1.86 22.64c-.094.094-.234.156-.359.156s-.266-.063-.359-.156l-.781-.781a.508.508 0 0 1-.156-.359.54.54 0 0 1 .156-.359L6.502 15 .361 8.859C.267 8.765.205 8.625.205 8.5s.063-.266.156-.359l.781-.781c.094-.094.234-.156.359-.156s.266.063.359.156l7.281 7.281a.536.536 0 0 1 .156.359z" /></svg>
      </svg>
    </li>
  </ul>

)


Linksblock.propTypes = {
  title: PropTypes.string,
  link: PropTypes.object,
}
export default Linksblock