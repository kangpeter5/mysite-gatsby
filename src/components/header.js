import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props =>(
  <li style={{ marginRight: 20 }}>
    <Link to={props.to} style={{ textDecoration: `none`, color: `#fff` }}>{props.children}</Link>
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
        maxWidth: 960,
        margin: `0 auto`,
        padding: `0 1.0875rem`
      }}
    >
      <Link to="/" style={{ color: `white`, textDecoration: `none`, }} >
        <h3>{siteTitle}</h3>
      </Link>
      <ul 
        style={{ 
          listStyle: `none`, 
          display: `flex`, 
          flexDirection: `row`, 
          justifyContent: `spaceBetween`, 
          margin: 0 
        }}
      >
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
