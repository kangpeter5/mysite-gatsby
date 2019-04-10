import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import logo from "../images/me.png"

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
      padding: `1.45rem 1.0875rem`
    }}
  >
    <header
      style={{
        display: `flex`,
      }}
    >
      <div style={{ width: `53px`, }}>
        <Link to="/" style={{ color: `#000`, textDecoration: `none`, }} >
          <img src={logo} alt="Logo" style={{ width: `100%`, marginBottom: `0`, }} />
        </Link>
      </div>
      <ul 
        style={{ 
          listStyle: `none`, 
          display: `flex`, 
          flexDirection: `row`, 
          justifyContent: `flex-end`,
          width: `100%`,
          height: `53px`,
          margin: 0,
        }}
      >
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/works/">Works</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.object,
}

export default Header
