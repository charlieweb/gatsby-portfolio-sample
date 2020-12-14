import React from 'react'
import {graphql} from 'gatsby';
import Image from '../../components/image/image'

export const ImageParagraph = ({ node }) => {
  const {field_image} = node.relationships.field_image.relationships;
  const content = {
    horizontal_align : node.field_horizontal_image_alignment,
    align: node.field_image_alignment,
    image: field_image.localFile ? field_image.localFile.childImageSharp.fluid : null,
    imageMaxWidth: field_image.localFile ? field_image.localFile.childImageSharp.sizes.presentationWidth : null,
    alt: node.relationships.field_image.field_image.alt,
  }
  return (
    <Image
    key = { node.id }
     {...content}
    />
  );
  
}


export const paragraphImageFragment = graphql`

  fragment paragraphImageFragment on paragraph__image {
    id
    field_horizontal_image_alignment
    field_image_alignment
    relationships {
      field_image {
        field_image {
            alt
          }
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
    }
  }
`;