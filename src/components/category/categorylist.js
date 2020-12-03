import React from 'react';
import {Link} from "gatsby";

const CategoryList = ({id, name, url}) => {

  return (
     <div key={url} className="tag">
        <Link to={url.alias} activeClassName="active">{name}</Link>
      </div>
  )
}


export default CategoryList;