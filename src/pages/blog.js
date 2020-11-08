import React from 'react'
import { graphql } from 'gatsby'
import BlogList from '../components/blogList'
import Layout from '../components/layout/layout'


export default function BlogPage({ data }){
  
  const blog = data.blogquery.edges;
  return(
    <>
    <Layout>
      <BlogList blogitems = { blog } />
      </Layout>
    </>
  )
}

// export default blogList

export const query = graphql`
  query Nodes  {
      blogquery: allNodeBlogPost(limit: 30, sort: {fields:changed, order: DESC}) {
      edges {
        node {
          title
          id
          body {
          summary
          processed
          }
          path {
            alias
          }
        }
      }
    }
  }
`