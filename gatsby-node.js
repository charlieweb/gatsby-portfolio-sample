/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Based on
// https://www.ryanbateman.space/blog/tutorial-gatsbyjs-for-drupalers-or-how-to-jamstack-ify-your-drupal-site-with-gatsbyjs/

const path = require('path');
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      
      blognode: allNodeBlogPost(filter: {status: {eq: true}} sort: {order: DESC,fields: created}) {
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

    }
  `);

  if (result.errors) {
    reporter.panic('Failed to create posts', result.errors);
  }
  

  
  const blogposts = result.data.blognode.edges;
  const pagesnode = result.data.pages.nodes;

  // Blog Pages
  const { createPage } = actions;
  blogposts.map(page =>
    createPage({
      path: page.node.path.alias,
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        id: page.node.drupal_internal__nid.toString(),
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

}
