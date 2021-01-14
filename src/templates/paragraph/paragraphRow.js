import React from 'react'
import {graphql} from "gatsby";
import { getParagraph } from '../paragraphHelpers'
import Slicerow from '../../components/slice/sliceRow'

export const paragraphRowFragment = graphql`
    fragment paragraphRowFragment on paragraph__row {
        id
        field_column_arrangement
        field_content_borders
        field_content_width
        field_css_class
        field_row_bottom_spacing
        field_row_content_spacing
        field_row_top_spacing
        relationships {
            field_row_content {
                type: __typename
                ...paragraphTextFragment
                ...paragraphColoredBoxFragment
                ...paragraphImageFragment
                ...paragraphAnchorFragment
                ...paragraphImageTextFragment
                ...paragraphNumberTileFragment
                ...paragraphLinkFragment
                ...paragraphUserFragment
                ...paragraphLogoBanner
                ...paragraphTestimonialFragment
                ...paragraphTextLinkFragment
                ...paragraphImgformTextFragment
                ...paragraphWorkTileFragment
                ...paragraphListingViewFragment
                ...paragraphContactFormFragment
            }
        }
    }
`;

const ParagraphRow = ( node ) => {
     const paragraphs = node?.relationships?.field_row_content?.map(getParagraph);
     const {
        field_column_arrangement,
        field_row_top_spacing,
        field_row_bottom_spacing,
        field_row_content_spacing,
        field_content_width,
        field_content_borders,
        field_css_class,
    } = node;
     return (
         <Slicerow
            key={node.id}
            columnArrangement={field_column_arrangement}
            topSpacing={field_row_top_spacing}
            bottomSpacing={field_row_bottom_spacing}
            contentSpacing={field_row_content_spacing}
            contentwidth={field_content_width}
            contentBorders={field_content_borders}
            utilityClasses={[field_css_class]}
         >
          { paragraphs }
         </Slicerow>
     )
   
}


export default ParagraphRow;