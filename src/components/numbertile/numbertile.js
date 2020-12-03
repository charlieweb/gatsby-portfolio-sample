import React from 'react'
import PropTypes from 'prop-types'
import {Link } from 'gatsby'
import './numbertile.scss';

const NumberTile = ({ title, links, description }) => {
  console.log(links)
 return (
   <div className='numbered-tile'>
     <h3 className='numbered-tile__title'>
        { title }
     </h3>
     <div className='numbered-tile__description'>
        {description}
     </div>
     { links.lenght  && 
       <>
       <h4 className= 'numbered-tile__links-label'>Related Content</h4>
       <ul className="numbered-tile__links">
        {links.map(({title, uri}) =>
           <li key={uri} className="numbered-tile__link">
           
           <Link to={uri.replace('internal:', '')}>{title}</Link>
          </li>
         
         )}
         
       </ul>
       </>
     }
   </div>
 )
}
NumberTile.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array.isRequired,
}

export default NumberTile

