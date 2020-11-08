
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../Logo'
import Menu from '../mainmenu/main-menu'

const Header = ({ siteTitle }) => (
  <div
    style={{ 
      marginBottom: `1.45rem`,
      margin: `20px auto`,
      maxWidth: 960,
    }}
  >
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
