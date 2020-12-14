import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Helmet from 'react-helmet'
import SEO from '../components/seo';
import PageWork from '../components/work/PageWork';


export const query = graphql`
   query($id: String!) {
    nodeWork(id: {eq: $id}) {
        id
        title
        field_secondary_title
        field_hero_text_color
        field_teaser_hover_text
        field_hero_background_color
        path {
          alias
        }
        relationships {
          field_industry {
           name
         }
          field_hero_background_image {
            relationships {
              field_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, quality: 100) {
                       ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
          
          field_secondary_content {
            id
            field_title
            field_background_color
            field_text_color
            relationships {
              field_rows {
                id
                type: __typename
                ...paragraphRowFragment
              }
            }
          }
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
              field_background_image {
                relationships {
                  field_image {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 1500, quality: 100) {
                           ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
              }
              field_rows {
                id
                type: __typename
                ...paragraphRowFragment
              }
            }
          }
        }
      }
  }
`;
export default function Workpage({ data }) {
  const work = data.nodeWork;
  const title = ' page-' + work.title.replace(/\s+/g, '-').toLowerCase();
  return (
  <Layout>
    <Helmet
        bodyAttributes={{
         class: 'path-work-page' + title,
         }}
       />
      <SEO title={work.title}/>
      <PageWork {...work}  />
  </Layout>
  
   );
};

Workpage.propTypes = {
  data: PropTypes.object.isRequired,
};