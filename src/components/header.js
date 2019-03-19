import { Link } from "gatsby"
import PropTypes from "prop-types"
import React , { useState, useEffect } from "react"
import "./header.css"

/*function ListLinks({ to, children }) {
  const [isActive, setIsActive] = useState(false)
  let urlPath = window.location.pathname

  return (
    <>
    {active === true ? (
      <li className="active">
        <Link>
          {children}
        </Link>
      </li>
    ) : (
      <li>
        <Link to={to} onClick={() => setIsActive(true)}>
          {children}
        </Link>
      </li>
    )}
    </>
  )
}*/

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
