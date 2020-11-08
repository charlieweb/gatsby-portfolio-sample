import React from 'react'
import { Link } from 'gatsby'

 function MenuLink({ label, url }){
  return <>
  <li>
  <Link 
  to= { url }
  activeClassName="active"
  >
  { label }
  </Link>
  </li>
   </>
  }
export default function MenuItem({ menulist }) {
  return (
  <div>
    {
      menulist.map((item) => (
        <MenuLink  label = { item.label } 
          url = {item.url.path}
        />
      ))
    }
  </div>
  );
}