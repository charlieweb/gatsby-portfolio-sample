import React from 'react'
import { graphql } from 'gatsby'
import Text from '../../components/text/text'



export const TextParagraph = ({ node }) => {
  const text = {
    text : node.field_long_text.processed,
    align: node.field_content_vertical_alignment,
  }
  return (
    <Text
    key = { node.id }
     {...text}
    />
  );
}




export const fragment = graphql`

  fragment paragraphTextFragment on paragraph__text {
    id
    field_content_vertical_alignment
    field_long_text {
      processed
    }
  }
`