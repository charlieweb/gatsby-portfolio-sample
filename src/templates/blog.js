import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import BlogTeaser from '../components/blog/BlogTeaser';
import Helmet from 'react-helmet'
import SEO from '../components/seo'
import MainWrapper from '../components/layout/MainWrapper';
import CategoryList from '../components/category/categorylist';
import { Container } from 'react-bootstrap';
import Pagination from '../components/pagination/pagination';

export default function Blog({ data, pageContext }){
  
  const blogs = data.blogList.nodes;
  const tags = data.tags.nodes;
  const size = 16;
  return(
    <>
   
    <Layout>
      <Helmet
       bodyAttributes={{
        class: 'path-blog'
        }}
       />
       <SEO title="Blog"/>
       
       <MainWrapper>
         <Container>
           <h1>Blog</h1>
           <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt  </p>
           <div className="category__content">
           <div><Link to='/blog' activeClassName="active">All</Link></div>
           { tags.map((tag) =>(
            <CategoryList key = {tag.id} name = {tag.name} url={tag.path} />
          ))}
          </div>
         </Container>
        
        <div className="secondary__section">
        <Container>
          <div className="blog__listing">
         {
          blogs.map((blog) => (
              <BlogTeaser key = {blog.id }
               {...blog}
              author = {{
                name : blog.relationships.uid.name,
                profileImg : blog.relationships.uid.relationships.user_picture ? blog.relationships.uid.relationships.user_picture.localFile.childImageSharp.fixed : null,
              }}
              
            />
        ))}
        { !pageContext.tagAlias && 
        
          <Pagination 
        pageSize = {size} 
        totalcount = {data.blogList.totalCount}
        currentPage = {pageContext.currentPage}
        skip = {pageContext.skip}
        base = "/blog"
        />
        }
        </div>
        </Container>
        </div>
       </MainWrapper>
      
    </Layout>
    </>
  )
}

export const query = graphql `
  query($skip: Int = 0, $pageSize: Int = 16, $tagRegex: String){
      blogList: 
      allNodeBlogPost(filter: {status: {eq: true} relationships:{field_category:{elemMatch:{name:{regex:$tagRegex}}}}} 
        sort: {fields:changed, order: DESC} limit: $pageSize, skip: $skip){
        totalCount
        nodes {
        id
        title
        created(formatString: "MMMM DD, YYYY")
        body {
          summary
          processed
        }
        path {
          alias
        }
        relationships {
          uid {
            name
            relationships {
             user_picture {
               localFile {
                 childImageSharp {
                   fixed(width: 50, height: 50) {
                     ...GatsbyImageSharpFixed
                   }
                 }
               }
             }
           }
          }
        }
       }
      }
      tags:allTaxonomyTermBlogCategory {
      nodes {
        id
        name
        path {
          alias
        }
      }
    }
  }
`;