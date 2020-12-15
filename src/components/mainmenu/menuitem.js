import React from 'react'
import { Link } from 'gatsby'

 function MenuLink({ label, url, links}){
   
   const submenus = links;

   if(submenus.length >= 1){
    
      return(
       <li className="dropdown">
        <Link  to= { url } activeClassName="active" className="nav-link dropdown-toggle" data-toggle="dropdown">
        {label }
       </Link>
        <ul className="dropdown-menu">
          <li className="nav-item dropdown">
            {submenus.map((item, index) => (
            
               <Link key= {index}  to= { item.url.path } activeClassName="active" className="nav-dropdown-item">
                  { item.label }
                </Link>
                      
              ))
            }
          </li>
        </ul>
       </li>
      )
   }
   else {
    return (
     <li>
      <Link  to= { url } activeClassName="active" className="nav-link">
        { label }
      </Link>
    </li>
  )
   }
  }
export default function MenuItem({ menulist }) {
  return (
  <>
    {
      menulist.map((item, index) => (
        
        <MenuLink  key= {index} label = { item.label } 
          url = {item.url.path} links = {item.links }
        />
        
      ))
    }
  </>
  );
}
