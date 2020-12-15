import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import MenuItem from "./menuitem";
import { Link } from 'gatsby';
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
            links {
              label
              url {
                path
              }
            }
          }
        }
      }
    }
  `)

  const menudata = data.drupal.menuByName.links;
  
  return (
    <>
    <nav className="nav">
     <ul className="main__menu">
      <MenuItem menulist = { menudata } />
     </ul>
     <Link className="work_us" to = '/contact'>Start a project </Link>
    </nav>
    </>
  )
}