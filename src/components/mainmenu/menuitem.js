import React, { useState } from 'react'
import { Link } from 'gatsby'

 function MenuLink({ label, url, links}){
   
   const submenus = links;
   const [isActive, setActive] = useState("false");
   const handleToggle = () => {
    setActive(!isActive);
  };
   if(submenus.length >= 1){
    
      return(
       <li className= {`nav-item dropdown ${isActive ? "" : "show"}`}>
        <Link  to= { url } activeClassName="active" className="nav-link dropdown-toggle" data-toggle="dropdown" >
        {label } 
       </Link>
       <button className="mobile__toggle" onClick={handleToggle}>text</button>
        <ul className={`dropdown-menu ${isActive ? "" : "show"}`} aria-labelledby="collasible-nav-dropdown">
          
            {submenus.map((item, index) => (
              <li  key= {index} >
               <Link  to= { item.url.path } activeClassName="active" className="dropdown-item">
                  { item.label }
                </Link>
               </li>     
              ))
            }
        </ul>
       </li>
      )
   }
   else {
    return (
     <li className='nav-item'>
      <Link  to= { url } activeClassName="active" className="nav-link ">
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
