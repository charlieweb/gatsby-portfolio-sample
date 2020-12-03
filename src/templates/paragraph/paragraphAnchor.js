import React from 'react';
import {graphql} from "gatsby";

export const paragraphAnchorFragment = graphql`
    fragment paragraphAnchorFragment on paragraph__anchor {
        id
        field_id
    }
`;

export const ParagraphAnchorDataFormatter = (data) => {
    return {
        id: data.id,
        anchor: data.field_id,
    }
};

const ParagraphAnchor = ({id, anchor}) => (
    <span id={anchor} className="invisible">{anchor}</span>
);

export default ParagraphAnchor;
