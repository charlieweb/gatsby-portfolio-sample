/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../header/header'
import './layout.css'
import Footer from '../footer/footer'
import Helmet from 'react-helmet'
import Heroanimation from '../heroanimation/heroanimation'

const Layout = ({ children, isFront }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="//cloud.typography.com/7567492/683824/css/fonts.css"
        />
      </Helmet>
      {isFront ? (
        <Heroanimation>
          <Header siteTitle={data.site.siteMetadata.title} />
        </Heroanimation>
      ) : (
        <Header siteTitle={data.site.siteMetadata.title} />
      )}
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isFront: PropTypes.bool,
}

export default Layout
