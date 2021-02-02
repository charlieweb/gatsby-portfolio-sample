import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout';
import Helmet from 'react-helmet';
import SEO from '../components/seo';
import PageUser from '../components/user/PageUser';

export const query = graphql`
   query($id: String!) {
    userUser(id: {eq: $id}) {
        field_first_name
        field_last_name
        field_spirit_animal
        field_position
        field_short_bio
        field_profile_facebook
        field_profile_twitter
        field_profile_instagram
        field_interests
        field_other_info{
          processed
        }
        relationships {
            node__blog_post {
              title
              path {
                alias
              }
            }
            user_picture {
               localFile {
                 childImageSharp {
                   fluid(maxWidth: 600, quality: 100) {
                     ...GatsbyImageSharpFluid_withWebp
                   }
                 }
               }
            }
            field_image_hero {
              localFile {
                 childImageSharp {
                   fluid(maxWidth: 355, maxHeight: 230, cropFocus: CENTER, quality: 100) {
                     ...GatsbyImageSharpFluid_withWebp
                   }
                 }
               }
            }
         }
        field_staff_bio {
          processed
        }
        field_profile_github
        field_profile_linkedin {
          title
          uri
        }
        field_profile_drupal_org {
          title
          uri
        }
        field_department
     }
   }
`;

export default function Userpage({ data }) {
  const user = data.userUser;
  const last_name= user.field_last_name ?  user.field_last_name : '';
  const user_title = user.field_first_name + ' ' + last_name
  return (
  <Layout>
      <Helmet
        bodyAttributes={{
         class: 'user-page',
         }}
       />
      <SEO title={user_title}/>
      
      <PageUser {...user}/>
   
  </Layout>
  
   );
};


Userpage.propTypes = {
  data: PropTypes.object.isRequired,
};