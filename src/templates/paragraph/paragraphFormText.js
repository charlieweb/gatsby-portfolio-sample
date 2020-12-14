import React from 'react';
import { graphql } from 'gatsby';
import ImgFormText from '../../components/Imageform/imageform';

export const paragraphImgFormText = ({ node }) => {
 const image = node.relationships.field_image_pform.relationships.field_image; 
 const content = {
   textleft: node.field_text_pform.processed,
   textright: node.field_form_info.processed,
   bgImage: image.localFile ? image.localFile.childImageSharp.fluid : null,
 }
return(
  <ImgFormText 
    { ...content }
  />
)

}






export const fragment = graphql`

  fragment paragraphImgformTextFragment on paragraph__image_form_text {
    id
    field_text_pform{
      processed
    }
    field_form_info {
      processed
    }
    relationships {
      field_image_pform {
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