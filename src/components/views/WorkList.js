import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import WorkListing from '../work/WorkListing'

export default () => {
  const data = useStaticQuery(graphql`
   query {
    allwork: allNodeWork(filter: {status: {eq: true}} sort: {order:DESC, fields:created}) {
      nodes {
        id
        title
        field_teaser_hover_text
        path{
          alias
        }
        relationships {
          field_industry {
            name
          }
          field_teaser_hover_image	 {
            relationships {
              field_image {
                localFile {
                  childImageSharp {
                    sizes {
                      presentationWidth
                    }
                    fluid(maxWidth: 1200, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }

          }
          field_teaser_background_image {
            relationships {
              field_image {
                localFile {
                  childImageSharp {
                    sizes {
                      presentationWidth
                    }
                    fluid(maxWidth: 570, maxHeight: 430, cropFocus: CENTER, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
   }
  `)
  const works = data.allwork.nodes;
  
  return(
    <>
    <WorkListing works= {works}/>
    </>
  )
}



