import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import PageFull from '../components/page/PageFull'

export const query = graphql`
   query pages($id: String!) {
    nodePage(id: {eq: $id}) {
        title
        field_secondary_title
        field_hero_text_color
        field_hero_background_color
        relationships {
          field_hero_rows {
             type: __typename
                ...paragraphRowFragment
          }
          field_body_content{
            id
            field_title
            field_background_color
            field_text_color
            relationships {
              field_rows {
                type: __typename
                ...paragraphRowFragment
              }
            }
          }
        }
      }
  }
`;

const NodeTemplate = ({ data }) => {
  const node = data.nodePage;
  return (
    <Layout>
      <PageFull {...node} />
    </Layout>
  );
};

NodeTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};



export default NodeTemplate;