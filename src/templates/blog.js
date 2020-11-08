import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';

export const query = graphql`
  query ($id: String!) {
    drupal {
      nodeById(id:$id) {
        ... on Drupal_NodeBlogPost {
          title
          body {
            processed
          }
        }
      }
    }
  }
`;

const BlogTemplate = ({ data }) => {
  const post = data.drupal.nodeById;
  return (
    <Layout>
      
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body.processed}}></div>
    </Layout>
  );
};

BlogTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};



export default BlogTemplate;