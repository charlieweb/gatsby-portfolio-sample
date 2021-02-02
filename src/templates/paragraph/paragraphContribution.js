import React from 'react';
import { graphql } from 'gatsby';
import Contributions from '../../components/contributions/contributions';


export const ParagraphContributions = ({ node }) => {
  const {user_picture} = node.relationships.field_author.relationships;
  const content = {
      id: node.id,
      link: node.field_project_link,
      description: node.field_project_description.processed,
      author: node.relationships.field_author,
      profileImage: user_picture.localFile ? user_picture.localFile.childImageSharp.fluid : null,
    }
    return (
      <Contributions
       {...content }
      />
    );
}


export const fragment = graphql`

  fragment paragraphContributions on paragraph__contributions {
    id
    __typename
    field_project_link {
      uri
      title
    }
    field_project_description {
      processed
    }
    relationships {
      field_author {
        name
        relationships {
          user_picture {
               localFile {
                 childImageSharp {
                   fluid(maxWidth: 600, quality: 100) {
                     ...GatsbyImageSharpFluid
                   }
                 }
               }
            }
        }
      }
    }
  }
`