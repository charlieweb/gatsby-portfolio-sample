import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import UserList from '../useritems/useritems';

export default () => {
  const data = useStaticQuery(graphql`
   query {
    allusers: allUserUser(filter:{field_listing_placement:{ne:null, nin:"none"}} sort:{order:ASC fields:[field_listing_placement, field_first_name]}) {
        nodes {
        id
        field_first_name
        field_position
        field_department
        path {
          alias
        }
        relationships {
          field_position_category {
            id
            name
          }
            user_picture {
               localFile {
                 childImageSharp {
                   fluid(maxWidth: 270, quality: 100) {
                     ...GatsbyImageSharpFluid_withWebp
                   }
                 }
               }
            }
         }
        }
     }
   }
  `)
  const users = data.allusers.nodes;
  return(
    <>
    <UserList key = {data.id} users = { users } />
    </>
  )
}



