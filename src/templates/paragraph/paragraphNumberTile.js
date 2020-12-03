import  React from 'react'
import { graphql } from 'gatsby'
import NumberTile from '../../components/numbertile/numbertile';

export const ParagraphNumberTile = ({ node }) =>  {
  const numbertile = {
    title : node.field_title,
    description: node.field_description,
  }
  return (

    <NumberTile
     key = {node.id }
     links = { node.field_links }
     {... numbertile }
    />

  );
}

export const fragment = graphql`

  fragment paragraphNumberTileFragment on paragraph__numbered_tile {
    id
    field_links {
      title
      uri
    }
    field_title
    field_description

  }
`