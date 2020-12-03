import React from 'react';
import { Container } from 'react-bootstrap';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import MainWrapper from '../components/layout/MainWrapper';
import UserTeaser from '../components/user/UserTeaser';


export default function OurTeam({ data }){

  const users = data.allusers.nodes;
 
   return (
     <>
     <Layout>
       <MainWrapper>
         <Container>
           <div className="user__listing">
            { users && users.map((user,index)=> (
              <UserTeaser key={ index } {...user} />
            ))}
           </div>
          
         </Container>
       </MainWrapper>
      
     </Layout>
     
     </>
     
   )
}


export const query = graphql`
   query {
    allusers: allUserUser(filter:{field_listing_placement:{ne:null, nin:"none"}} sort:{order:ASC fields:[field_listing_placement, field_first_name]}) {
        nodes {
        field_first_name
        field_position
        path {
          alias
        }
        relationships {
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
`;