import React from 'react'
import { Link } from 'gatsby'

  function SingleBlog({ title, summary, url }){
  return <>
  <Link to= {url }>
  <h2>{ title.title }</h2>
  </Link>
  <p dangerouslySetInnerHTML={{ __html: summary }} />
  
   </>
  }
export default function BlogList({ blogitems }) {
  return (
  <div>
    {
      blogitems.map((blogitem) => (
        <SingleBlog key = { blogitem.node.id } title = { blogitem.node } 
        summary={blogitem.node.body.summary.length > 0 ? blogitem.node.body.summary : blogitem.node.body.processed.substring(0, 300)}
          url = {blogitem.node.path.alias}
        />
      ))
    }
  </div>
  );
}