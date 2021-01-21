import React from 'react'
import { Link } from 'gatsby'
import Logobrand from '../assets/images/logo.svg'

export default function Logo(){
   return (
     <>
     <Link to="/" className="main_logo">
     <Logobrand/>
     </Link>
     </>
   )
}