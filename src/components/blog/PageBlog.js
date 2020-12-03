import React from 'react';
import PropTypes from 'prop-types'
import MainWrapper from '../layout/MainWrapper'
import { Link } from 'gatsby'
import Img from 'gatsby-image';
import './page-blog.scss'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';
import ShareButtons from '../share/share';
import useSiteMetadata from '../../hooks/use-site-metadata'
const PageBlog = props => {

   const {
    title,
    body,
    path,
    created,
    relationships: {
      uid,
      field_category
      
    }
   } = props
   const author = { ...uid }
   const field_image = uid.relationships.user_picture == null ? '': uid.relationships.user_picture ;
   const profileImg = field_image.localFile ? field_image.localFile.childImageSharp.fixed : null;
   const { siteURL, twitterHandle } = useSiteMetadata();
   const url = `${siteURL}${path.alias}`;
  return (
    <MainWrapper>
      <Container>
      <h1 className='page-title'> { title }</h1>
      <div className="blog__header">
         <div className="author">
          <div className="author__picture">
            { profileImg &&
               <Img fixed={profileImg} />
            }
           </div>
          <div className="author__info">
            <span>{author.name }</span>
            <span>{author.field_position}</span>
            
            { author.field_profile_twitter &&
              <a href={author.field_profile_twitter} target="__self">Follow</a>
         
            }
             
          </div>

          </div>
          <span className="post_date">{created}</span>
          <div className="share__blog">
               <h4>Share Article </h4>
              <ShareButtons title= {title} url= {url} twitterHandle={twitterHandle}/>
          </div>
          
      </div>
      <div className="blog__categories">
         { field_category && field_category.map(({name, path }, index) =>
              <div key ={index}> 
              <Link to={path.alias}>{name}</Link>
              </div>
            )
          }
      </div>
      <div className="row">
        <Col>
          <div className="blog__body" dangerouslySetInnerHTML={{ __html: body.processed}}></div>
        </Col>
          
       </div>
      </Container>
    </MainWrapper>
  );
}


PageBlog.propTypes = {
  title: PropTypes.string,
}


export default PageBlog;