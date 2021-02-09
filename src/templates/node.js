import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import SEO from '../components/seo'
import Layout from '../components/layout/layout'
import PageFull from '../components/page/PageFull'

export const query = graphql`
  query pages($id: String!) {
    nodePage(id: { eq: $id }) {
      id
      title
      path {
        alias
      }
      field_hero_text_color
      field_hero_background_color
      relationships {
        field_hero_rows {
          type: __typename
          ...paragraphRowFragment
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
        field_body_content {
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
`

const NodeTemplate = ({ data, pageContext }) => {
  const {isFront} = pageContext
  const node = data.nodePage
  const pagetitle = 'page-' + node.title.replace(/\s+/g, '-').toLowerCase()

  return (
    <Layout isFront={isFront}>
      <Helmet
        bodyAttributes={{
          class: isFront ? 'path-frontpage' : pagetitle,
        }}
      />
      <SEO title={node.title} />
      <PageFull {...node} isFront={isFront} />
    </Layout>
  )
}

NodeTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default NodeTemplate
