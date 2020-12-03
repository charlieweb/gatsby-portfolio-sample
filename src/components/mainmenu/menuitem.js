import React from 'react'
import { Link } from 'gatsby'

 function MenuLink({ label, url}){
  return <>
    <li>
      <Link  to= { url } activeClassName="active">
        { label }
      </Link>
    </li>
   </>
  }
export default function MenuItem({ menulist }) {
  return (
  <>
    {
      menulist.map((item, index) => (
        
        <MenuLink  key= {index} label = { item.label } 
          url = {item.url.path}
        />
        
      ))
    }
  </>
  );
}