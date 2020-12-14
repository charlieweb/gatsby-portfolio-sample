import React from 'react';
import { graphql } from 'gatsby';
import WorkTile from '../../components/worktile/worktile';


export const ParagraphWorkTile = ({ node })  => {
  const logo_image = node.relationships.field_node.relationships.field_teaser_hover_image.relationships.field_image;
  const teaser_image = node.relationships.field_node.relationships.field_teaser_background_image.relationships.field_image;
  const items = {
    title: node.relationships.field_node.title,
    text : node.relationships.field_node.field_teaser_hover_text,
    logo : logo_image.localFile ? logo_image.localFile.childImageSharp.fluid : null,
    image : teaser_image.localFile ? teaser_image.localFile.childImageSharp.fluid : null,
    link: node.relationships.field_node.path.alias,
  }
  return(
   <WorkTile {...items} />
  );
}


export const fragment = graphql`

  fragment paragraphWorkTileFragment on paragraph__work_tile {
    id
    relationships {
      field_node {
        title
        field_teaser_hover_text
        path {
          alias
        }
        relationships {
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
`