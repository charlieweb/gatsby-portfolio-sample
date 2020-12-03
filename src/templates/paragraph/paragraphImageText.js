import React from 'react';
import { graphql } from 'gatsby';
import ImageText from '../../components/imagetext/imagetext';


export const ParagraphImageText = ({ node }) =>  {
    const {field_image} = node.relationships.field_image.relationships;
    const imagetext = {
      title: node.field_title,
      imagelayout: node.field_image_title_text_layout,
      image: field_image.localFile ? field_image.localFile.childImageSharp.fluid : null,
      description: node.field_long_text.processed,
    }
    return(
      <ImageText
       key = {node.id }
       {...imagetext}
       links = { node.field_link }
      />
    );


}



export const fragment = graphql`

  fragment paragraphImageTextFragment on paragraph__image_title_text {
    id
    field_link {
      title
      uri
    }
    field_title
    field_image_title_text_layout
    field_long_text {
      processed
    }
    relationships {
      field_image {
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
`