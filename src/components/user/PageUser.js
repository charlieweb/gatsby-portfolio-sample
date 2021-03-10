import React from 'react'
import MainWrapper from '../layout/MainWrapper'
import { Container } from 'react-bootstrap'
import ParagraphRow from '../../templates/paragraph/paragraphRow'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './user.scss'
import Userslide from '../userslide/userslide'

const PageUser = props => {

 const {
    field_first_name,
    field_last_name,
    field_staff_bio,
    field_position,
    field_profile_facebook,
    field_profile_twitter,
    field_profile_instagram,
    field_interests,
    field_profile_drupal_org,
    field_profile_github,
    field_profile_linkedin,
    field_other_info,
    relationships: {
      user_picture,
      field_image_hero,
      node__blog_post,
      field_rows_user,
    }
   } = props
   const last_name= field_last_name ?  field_last_name : '';
   const children = 'Meet More of the Chapter Three Team';
   const user_name = field_first_name + ' ' + last_name;
   const field_image = user_picture == null ? '': user_picture ;
   const profileImg = field_image.localFile ? field_image.localFile.childImageSharp.fluid : null;
   let sortdate = node__blog_post?.sort((a, b) => b.created > a.created ? 1: -1);
   return (
     <>
      <MainWrapper>
        <div className="profile__header">
           <Container>
              <div className="profile__info">
                  <div className="profile__name">
                    <h1>{user_name}</h1>
                    <h3>{field_position}</h3>
                    { field_other_info && 
                       <div className="other__info"  dangerouslySetInnerHTML={{ __html: field_other_info.processed}}></div>
                    }
                    
                  </div>
                  <div className="profile__image">
                    { profileImg &&
                      <Img fluid={profileImg} />
                    }
                  </div>
              </div>
               
                  <div className="row">
                    <div className=" col-sm-12 col-md-3">
                      <div className="social__links">
                        <ul>
                          { field_profile_drupal_org && 
                            <li><a href={field_profile_drupal_org.uri} target="__self">drupal<FontAwesomeIcon icon={["fab", "drupal"]} /></a></li>
                          }
                          { field_profile_facebook && 
                            <li><a href={field_profile_facebook} target="__self">facebook<FontAwesomeIcon icon={["fab", "facebook"]} />facebook</a></li>
                          }
                          { field_profile_twitter && 
                            <li><a href={field_profile_twitter} target="__self">twitter<FontAwesomeIcon icon={["fab", "twitter"]} /></a></li>
                          }
                          { field_profile_instagram && 
                            <li><a href={field_profile_instagram} target="__self">instagram<FontAwesomeIcon icon={["fab", "instagram"]} /></a></li>
                          }
                          { field_profile_github && 
                            <li><a href={field_profile_github} target="__self">github<FontAwesomeIcon icon={["fab", "github"]} /></a></li>
                          }
                          { field_profile_linkedin && 
                            <li><a href={field_profile_linkedin.uri} target="__self">linkedin<FontAwesomeIcon icon={["fab", "linkedin"]} /></a></li>
                          }
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 offset-md-2 col-sm-12">
                      
                      { field_position && 
                        <div className="class__department">{field_position}</div>
                      }
                      
                    </div>
                    
                  </div>
          </Container>
        
        </div>
        <Container>
          <div className="image__profile">
           {field_image_hero && field_image_hero.slice(1,4).map((image, index) => {
             const image_content =  image.localFile ? image.localFile.childImageSharp.fluid : null;
             return <Img imgStyle={{objectPosition: 'top'}} key={index} fluid= {image_content}/>
           })}
           </div>
           <div className="row">
             <div className="user__bio col-md-7 col-12 col-sm-12" >
                 <div dangerouslySetInnerHTML={{ __html: field_staff_bio.processed}}></div>
             <div className="row_certification">
              {field_rows_user && field_rows_user.map((content, index) => {
                return <ParagraphRow {...content} key={index} />
              })}
            </div>
             </div>
           
            <div className="user__interest col-lg-3 offset-lg-2 col-md-3 col-12 col-sm-12">
              { sortdate?.length > 0 && 
               <h3>Blogs</h3>
              }
               <ul className="user__post-list" >
                { sortdate && sortdate.slice(0,4).map((post, index) => (
                  <>
                    <li key = {index}><Link to={post.path.alias }>{post.title }</Link></li>
                  </>  
                ))}
               </ul>
              { field_interests?.length > 0 && 
               
               <h3>Interests</h3>
                
              }
              { field_interests && field_interests.map((interet, index) => (
                <ul key= {index}>
                  <li>{interet}</li>
                </ul>
              ))}
            </div>
            </div>
        </Container>
        <div>
           
          <Userslide>{children}</Userslide></div>
      </MainWrapper>
     </>
   )

}

export default PageUser;