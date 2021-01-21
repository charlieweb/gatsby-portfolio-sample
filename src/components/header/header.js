
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../Logo'
import Menu from '../mainmenu/main-menu'
import './header.scss'
import Navbar from 'react-bootstrap/Navbar'

const Header = ({ siteTitle }) => (
  <div className='header__section'>
    
     <Navbar collapseOnSelect expand="lg">
        <Logo/>
         <Navbar.Toggle aria-controls="basic-navbar-nav">
           <span className="icon-bar top-bar"></span>
           <span className="icon-bar middle-bar"></span>
           <span className="icon-bar bottom-bar"></span>
         </Navbar.Toggle>
         <Navbar.Collapse id="responsive-navbar-nav">
          <Menu/>
          </Navbar.Collapse>
      </Navbar>  
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
