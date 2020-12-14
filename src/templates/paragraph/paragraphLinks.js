import React from 'react'
import { graphql } from 'gatsby'
import Linksblock from '../../components/links/links';

export const ParagraphLink = ({ node }) => {
  const links = node.field_links;
  return (
      <>
        <Linksblock
            key = { node.id }
            links = { links }
          />
      </>
  );
}

export const fragment = graphql`

  fragment paragraphLinkFragment on paragraph__links {
    id
    field_links {
      title
      uri
    }
  }
`