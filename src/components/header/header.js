
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../Logo'
import Menu from '../mainmenu/main-menu'
import './header.scss'

const Header = ({ siteTitle }) => (
  <div className='header__section'>
        <Logo/>
        <Menu/>
        
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
