import React from 'react';
import { graphql } from 'gatsby';
import { getParagraph } from '../paragraphHelpers'
import ContribList from '../../components/contributions/contriblist';

export const ParagraphContribList = ({ node }) => {
  
   const item = node.relationships.field_contrib_item;
   
  let contribitem = item.map(box => {
    return getParagraph({
      ...box,
    })
  })
  return (
    <ContribList
      key = { node.id }
      heading = {node.field_heading_pc}
      content = { contribitem }
    />
  );
}

export const fragment = graphql`

  fragment paragraphContribList on paragraph__contrib_list {
    id
    field_heading_pc
    relationships {
      field_contrib_item {
        type: __typename
         ...paragraphContributions
      }
    }
  }
`