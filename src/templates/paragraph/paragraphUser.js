import React from 'react'
import { graphql } from 'gatsby'
import Userslide from '../../components/userslide/userslide'



export const UserSlideParagraph = ({ node }) => {
  const content = {
    title : node.field_title_user_carousel,
  }
  return (
    <Userslide
    key = { node.id }
     {...content}
    />
  );
}




export const fragment = graphql`

  fragment paragraphUserFragment on paragraph__user_carousel {
    id
    field_title_user_carousel
  }
`