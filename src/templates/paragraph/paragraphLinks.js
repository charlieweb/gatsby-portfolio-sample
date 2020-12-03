import React from 'react'
import { graphql } from 'gatsby'
import Linksblock from '../../components/links/links';

export const ParagraphLink = ({ node }) => {
  const links = node.field_links;
  return (
      <>
       {
         links && links.map(({title, uri}, index ) =>
          <Linksblock
            key = { index }
            title = {title }
            link = { uri }
          />
         )
       }
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