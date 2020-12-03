/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


const path = require('path');
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { array } = require('prop-types');
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      
      blognode: allNodeBlogPost(filter: {status: {eq: true}} sort: {order: DESC,fields: created}) {
        totalCount
        edges {
          node {
          id
          drupal_internal__nid
          title
          created
          path {
              alias
            } 
          }
          
        }
      }
      pages: allNodePage(filter: {status: {eq: true}}) {
        nodes {
          id
          drupal_internal__nid
          path {
            alias
          }
        }
      }

      workpages: allNodeWork(filter: {status: {eq: true}} sort: {order:DESC, fields:created}) {
        nodes {
          id
          drupal_internal__nid
          path{
            alias
          }
        }
      }
      jobs: allNodeJobPosting(filter: {status: {eq: true}} sort: {order:DESC, fields:created}) {
        nodes {
          id
          path{
            alias
          }
        }
      }
      allusers: allUserUser(filter:{field_listing_placement:{ne:null, nin:"none"}} sort:{order:ASC fields:[field_listing_placement, field_first_name]}) {
         nodes {
           id
           path{
            alias
          }
         }
      }
      blogtags: allTaxonomyTermBlogCategory(sort: {order: ASC, fields: weight}) {
        edges {
          node {
            id
            name
            path {
              alias
            }
          }
        }
      }

    }
    
  `);

  if (result.errors) {
    reporter.panic('Failed to create posts', result.errors);
  }
  

  
  const blogposts = result.data.blognode.edges;
  const pagesnode = result.data.pages.nodes;
  const workpage = result.data.workpages.nodes;
  const jobspage = result.data.jobs.nodes;
  const userpeople = result.data.allusers.nodes;
  const categories = result.data.blogtags.edges.map(({node}) => node);
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(result.data.blognode.totalCount/pageSize);
  const tags = result.data.blogtags.edges;
  const { createPage } = actions;

  

  // Blog Pages
  blogposts.map(page =>
    createPage({
      path: page.node.path.alias,
      component: path.resolve(`./src/templates/blog-node.js`),
      context: {
        id: page.node.id,
      },
    })
  );


  // Basic page nodes
  pagesnode.map(pageitem =>{
    if (!pageitem.path.alias) {
      return
    }
    const {alias} = pageitem.path
    const isFront = alias === '/home'
    createPage({
      path: isFront ? '/' : alias,
      component: path.resolve(`./src/templates/node.js`),
      context: {
        id: pageitem.id,
        isFront,
      },
    })
   });

   

   // Work page nodes
  workpage.map(work =>{
    if (!work.path.alias) {
      return
    }
    const url = work.path.alias;
    
    createPage({
      path: url,
      component: path.resolve(`./src/templates/work.js`),
      context: {
        id: work.id,
      },
    })
   });

     // Jobs Page
  jobspage.map(job =>{
    if (!job.path.alias) {
      return
    }
    const url = job.path.alias;
    
    createPage({
      path: url,
      component: path.resolve(`./src/templates/job.js`),
      context: {
        id: job.id,
      },
    })
   });

  // User nodes
   userpeople.map(user =>{
    if (!user.path.alias) {
      return
    }
    const url = user.path.alias;
    
    createPage({
      path: url,
      component: path.resolve(`./src/templates/user.js`),
      context: {
        id: user.id,
      },
    })
   });

  // field category in blogs
  tags.forEach((tag) =>{
     if (!tag.node.path.alias) {
      return
    }
    createPage({
      path: tag.node.path.alias,
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        tagname: tag.node.name,
        tagRegex: `/${tag.node.name}/i`,
        tagAlias: tag.node.path.alias,
      },
    })
  });

  Array.from({length: pageCount}).forEach((_, i) => {
     createPage({
      path: i === 0 ? `/blog` :  `/blog/page/${i + 1}`,
      component:  path.resolve(`./src/templates/blog.js`),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
        categories,
      }
     })
   });


}
