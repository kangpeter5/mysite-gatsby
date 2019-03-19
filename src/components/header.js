import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const isActive = ({ location, href }) => {
  if(location.pathname === '/' && href === '/'){
    return { className: 'active' }
  } else if ( href !== '/'){
    return { className: 'active' }
  }

  return null
}

const ListLinks = ({ children, to }) =>(
  <li getProps={isActive}>
    <Link to={to}>
      {children}
    </Link>
  </li>
)

ListLinks.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
}

const ListLink = props =>(
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
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
      <h3 style={{ marginRight: 20 }}>
        <Link to="/" style={{ color: `white`, textDecoration: `none`, }} >
          {siteTitle}
        </Link>
      </h3>
      <ul 
        style={{ 
          listStyle: `none`, 
          display: `flex`, 
          flexDirection: `row`, 
          justifyContent: `end`,
          margin: 0
        }}
      >
        <ListLinks to="/about/">About</ListLinks>
        <ListLinks to="/contact/">Contact</ListLinks>
      </ul>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.object.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
