import React from 'react';
import PropTypes from 'prop-types'
import MainWrapper from '../layout/MainWrapper'
import { Link } from 'gatsby'
import Img from 'gatsby-image';
import './page-blog.scss'
import { Container } from 'react-bootstrap';
import ShareButtons from '../share/share';
import useSiteMetadata from '../../hooks/use-site-metadata'
import ReactHtmlParser from 'react-html-parser';

const PageBlog = props => {

   const {
    title,
    body,
    path,
    created,
    relationships: {
      uid,
      field_category
      
    },
    bodyImages
   } = props
   const author = { ...uid }
   const field_image = uid.relationships.user_picture == null ? '': uid.relationships.user_picture ;
   const profileImg = field_image.localFile ? field_image.localFile.childImageSharp.fixed : null;
   const { siteURL, twitterHandle } = useSiteMetadata();
   const url = `${siteURL}${path.alias}`;
   let postBody = <div dangerouslySetInnerHTML={{ __html: body.processed }} />
  if (bodyImages) {
    postBody = new ReactHtmlParser(body.processed, {
      transform: function transform(node, index) {
        if (
          node.type === 'tag' &&
          node.name === 'article' &&
          node.attribs['data-media-source'] === 'image'
        ) {
          const imageData = bodyImages.find(
            el =>
              el.drupal_internal__fid ===
              parseInt(node.attribs['data-media-source-value'])
          )
          if (imageData) {
            return <>
            <img key={index} src={imageData.localFile.publicURL} alt={imageData.localFile.name}/>
            </>
          }
        }
      },
    })
    
  }
  return (
    <MainWrapper>
      <Container>
      <h1 className='blog-title'> { title }</h1>
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
        <div className="col-md-8 col-12 col-sm-12">
          <div className="blog__body"> {postBody} </div>
        </div>
           <div className="user__interest col-lg-3 offset-lg-1 col-md-3 col-12 col-sm-12">
             <h3>Services</h3>
             <ul className="blog__services">
               <li><Link to='/services'>Website Strategy</Link></li>
               <li><Link to='/services'>Development</Link></li>
               <li><Link to='/services'>Support & Training</Link></li>
             </ul>
           </div>
       </div>
      </Container>
    </MainWrapper>
  );
}


PageBlog.propTypes = {
  title: PropTypes.string,
}


export default PageBlog;