import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"
import logo from "../images/me.png"

const isActive = ({ location, href }) => {  
  if(location.pathname !== '/' && location.pathname === href){
    return { className: 'active' }
  }

  return null
}

const ListLink = ({ children, to }) =>(
  <li className={headerStyles.link}>
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
  <header
    style={{
      display: `flex`,
      padding: `1rem 2rem`,
      height: `10vh`,
    }}
  >
    <div style={{ width: `53px`, }}>
      <Link to="/" style={{ textDecoration: `none`, }} >
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
        margin: 0,
      }}
    >
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/works/">Works</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.object,
}

export default Header
