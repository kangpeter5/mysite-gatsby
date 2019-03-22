import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

/* using this git
https://github.com/lowmess/lowmess/blob/master/src/components/Navigation/Navigation.js
*/

const isActive = ({ location, href }) => {  
  if(location.pathname !== '/' && location.pathname === href){
    return { className: 'active' }
  }

  return null
}

const ListLink = ({ children, to }) =>(
  <li>
    <Link to={to} getProps={isActive}>
      {children}
    </Link>
  </li>
)

ListLink.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
}

const Header = ({ siteTitle, location }) => (
  <div
    style={{
      background: `rebeccapurple`,
      padding: `1.45rem 1.0875rem`
    }}
  >
    <header
      style={{
        display: `flex`,
        margin: `0 auto`
      }}
    >
      <h3 style={{ width: `100%`, marginRight: 20 }}>
        <Link to="/" style={{ color: `white`, textDecoration: `none`, }} >
          {siteTitle}
        </Link>
      </h3>
      <ul 
        style={{ 
          listStyle: `none`, 
          display: `flex`, 
          flexDirection: `row`, 
          justifyContent: `flex-end`,
          width: `100%`,
          margin: 0
        }}
      >
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/works/">Works</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
  location: window.location.pathname,
}

export default Header
