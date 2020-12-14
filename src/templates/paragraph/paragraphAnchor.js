import React from 'react';
import {graphql} from "gatsby";

export const paragraphAnchorFragment = graphql`
    fragment paragraphAnchorFragment on paragraph__anchor {
        id
        field_id
    }
`;

export const ParagraphAnchor = ({node}) => {
  return (
   <>
   <span id={node.field_id} className="invisible">{node.field_id}</span>
   </>
  );
}


export default ParagraphAnchor;
