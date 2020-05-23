import React from "react"
import PropTypes from "prop-types"

import Header from "../header/header"
import Menu from "../menu/menu"
import mailIcon from "./envelope.png"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="Wrapper">
      <Header />
      <Menu />
      <main>{children}</main>
      <div className="StickyEmail">
        <a className="EmailLink" href="mailto:benrogerson10@gmail.com">
          <img className="MailIcon" src={mailIcon} alt="Email me" />
          Play it to Feet
        </a>
      </div>
    </div>
  )
}
// <footer>
//   © {new Date().getFullYear()}, Built with
//   {` `}
//   <a href="https://www.gatsbyjs.org">Gatsby</a>
// </footer>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
