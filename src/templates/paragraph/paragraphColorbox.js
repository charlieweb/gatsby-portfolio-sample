import React from 'react'
import { graphql } from 'gatsby'
import Colorbox from '../../components/colorbox/colorbox'
import { getParagraph } from '../paragraphHelpers'


export const ColorboxParagraph = ({ node }) => {
  
   const item = Array.of(node.relationships.field_box_content);
   
   let boxes = item.map(box => {
    return getParagraph({
      ...box,
    })
  })
  return (
    <Colorbox 
      key = { node.id }
      backgroundColor = {node.field_custom_color}
      textColor = {node.field_text_color}
      internalSpacing = { node.field_internal_spacing}
      boxContent = { boxes }
    />
  );
}




export const fragment = graphql`

  fragment paragraphColoredBoxFragment on paragraph__colored_box {
    id
    field_custom_color
    field_internal_spacing
    field_text_color
    relationships {
      field_box_content {
        type: __typename
         ...paragraphTextFragment
         ...paragraphImageFragment
      }
    }
  }
`