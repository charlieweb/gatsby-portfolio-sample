
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../Logo'
import Menu from '../mainmenu/main-menu'
import './header.scss'
import { Link } from 'gatsby';
const Header = ({ siteTitle }) => (
  <div className='header__section'>
        <Logo/>
        <Menu/>
        <Link className="work_us" to = '/contact'>Start a project </Link>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
