import React from 'react';
import PropTypes, { node } from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import Helmet from 'react-helmet'
import SEO from '../components/seo'
import PageBlog from '../components/blog/PageBlog';

export const query = graphql`
  query ($id: String!) {
    nodeBlogPost(id: {eq: $id}) {
       id
       title
       created(formatString: "MMMM DD, YYYY")
       path {
         alias
       }
       body {
         summary
         value
         processed
       }
       relationships {
         uid {
           name
           field_position
           field_profile_twitter
           relationships {
             user_picture {
               localFile {
                 childImageSharp {
                   fixed(width: 50, height: 50) {
                     ...GatsbyImageSharpFixed
                   }
                 }
               }
             }
           }
         }
         field_category {
           name
           path {
             alias
           }
         }
       }
    }
  }
`;

const BlogTemplate = ({ data }) => {
  const nodeblog = data.nodeBlogPost;
  return (
    <Layout>
      <Helmet
        bodyAttributes={{
         class:'blog-page',
         }}
       />
       <SEO title={nodeblog.title}/>
      <PageBlog key = {node.id} { ...nodeblog } />
      
    </Layout>
  );
};

BlogTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};



export default BlogTemplate;