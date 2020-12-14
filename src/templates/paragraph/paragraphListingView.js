import React from 'react';
import {graphql} from "gatsby";
import views from '../../components/views'

export const ParagraphListingView = ({ node }) =>  {
  const ListingView = views[node.field_list_item]
  return <ListingView key={node.id} />
}


export const fragment = graphql`
  fragment paragraphListingViewFragment on paragraph__listing_view {
    id
    field_list_item
  }
`