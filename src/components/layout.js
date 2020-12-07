/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import useTheme from "./useTheme"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

//const { theme, toggleTheme } = useTheme();
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            padding: `1rem`,
            maxWidth: `1080px`,
            margin: `0 auto`,
          }}
        >
          <main
            style={{
              position: `relative`,
              minHeight: `80vh`,
            }}
          >{children}</main>
        </div>
        <footer 
          style={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            fontSize: `12px`,
            textAlign: `center`,
            textDecoration: `none`,
            padding: `1.45rem 0`,
            margin: `0 auto`,
          }}
        >
          {/*<button type="button" onClick={toggleTheme}>Switch Theme</button>*/}
          <section>
            ©{new Date().getFullYear()}, Built using <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a> & <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
          </section>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
