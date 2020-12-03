import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
const UserTeaser = props => {

  const {
    field_first_name,
    field_position,
    path,
    relationships: {
      user_picture,
    }
  } = props
   const field_image = user_picture == null ? '': user_picture ;
   const profileImg = field_image.localFile ? field_image.localFile.childImageSharp.fluid : null;
   return (
     <>
     <div className="user__teaser">
       <Link to={path.alias }>
       <div className="user__profile">
        { profileImg &&
         <Img fluid={profileImg} />
        }
       </div>
       <div className="user__name">
        {field_first_name}
       </div>
       <div className="user__position">
        {field_position}
       </div>
       </Link>
     </div>
      
     </>
   );

}

export default UserTeaser;