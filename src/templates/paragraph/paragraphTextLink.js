import React from 'react'
import { graphql } from 'gatsby'
import TextLink from '../../components/textlink/textlink'


export const ParagraphTextlink = ({ node }) => {
 const textlink = {
   title: node.field_title,
   link: node.field_link,
   description: node.field_long_text.processed
 }
 return (

   <TextLink {...textlink} />
 )
}

export const fragment = graphql`

  fragment paragraphTextLinkFragment on paragraph__text_link {
    id
    field_long_text {
      processed
    }
    field_title
    field_link {
      title
      uri
      uri_alias
    }
  }
`