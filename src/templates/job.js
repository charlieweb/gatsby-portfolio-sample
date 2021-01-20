import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import SEO from '../components/seo'
import Layout from '../components/layout/layout'
import JobsPage from '../components/job/PageJob';


export const query = graphql`
   query($id: String!) {
    nodeJobPosting(id: {eq: $id}) {
        id
        title
        body {
          processed
        }
        relationships {
          field_hero_rows {
             type: __typename
                ...paragraphRowFragment
          }
        }
      }
  }
`;
export default function JobPage({ data }) {
  const job = data.nodeJobPosting;
  const jobs = {
    title : job.title,
    body : job.body,
    rows : job.relationships.field_hero_rows
  }
  return (
  <Layout>
      <Helmet
       bodyAttributes={{
        class: 'path-job'
        }}
       />
     <SEO title={job.title}/>
     <JobsPage
      { ...jobs}
     />
  </Layout>
  
   );
};

JobPage.propTypes = {
  data: PropTypes.object.isRequired,
};