import React from 'react';
import { graphql } from 'gatsby';
import LogoBanner from '../../components/logobanner/logobanner';


export const ParagraphLogoBanner = ({ node }) => {
  const {field_image} = node.relationships.field_image.relationships;
  const background_image = node.relationships.field_background_image.relationships.field_image;
  const content = {
      backgroundColor: node.field_custom_color,
      logo: field_image.localFile ? field_image.localFile.childImageSharp.fluid : null,
      backgroundImage: background_image.localFile ? background_image.localFile.childImageSharp.fluid : null,
    }
    return (
      <LogoBanner
       {...content }
      />
    );
}


export const fragment = graphql`

  fragment paragraphLogoBanner on paragraph__logo_image_banner {
    id
    field_custom_color
    relationships {
      field_background_image {
        relationships {
          field_image {
            localFile {
              childImageSharp {
                sizes {
                  presentationWidth
                }
                fluid(maxWidth: 1500, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      field_image {
        relationships {
          field_image {
            localFile {
              childImageSharp {
                sizes {
                  presentationWidth
                }
                fluid(maxWidth: 200, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`