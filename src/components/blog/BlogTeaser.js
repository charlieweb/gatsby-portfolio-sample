import React from 'react'
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import './page-blog.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../hooks/font-awesome';

const BlogTeaser  = ({ title , created, author , body, path }) => {
  const summary = body.processed.replace(/(<([^>]+)>)/gi, "").substring(0, 140) + ' ...';
  return (
    <div className="blog__teaser">
      <h3>
        <Link to= {path.alias}>
        {title} 
        <FontAwesomeIcon icon={["fas", "arrow-circle-right"]} />
        </Link>
        </h3>
      <div className="blog__teaser-body">
       <p dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
      <div className="blog__teaser-info">
        <div className="blog__teaser-image">
          {author.profileImg &&  <Img fixed={author.profileImg}/>}
        </div>
        <div className="author__name">{author.name}</div>
        <span className="blog__teaser-date">{created}</span>
      </div>
      
    </div>
  )

}

export default BlogTeaser;