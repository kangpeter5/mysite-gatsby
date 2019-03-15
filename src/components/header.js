import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props =>(
  <li style={{ marginRight: 20, marginBottomL: 0 }}>
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
        display: `flex`,
        maxWidth: 980,
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
