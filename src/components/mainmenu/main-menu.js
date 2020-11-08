import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import MenuItem from "./menuitem";

export default function Menu() {

  const data = useStaticQuery(graphql`
    query  {
        drupal {
        menuByName(name:"main"){
          links {
            label
            url {
              path
            }
          }
        }
      }
    }
  `)

  const menudata = data.drupal.menuByName.links;
  
  return (
    <>
     <ul>
      <MenuItem menulist = { menudata } />
     </ul>
      
    </>
  )
}