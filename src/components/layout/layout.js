import React from "react"
import PropTypes from "prop-types"

import Header from "../header/header"
import Menu from "../menu/menu"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="Wrapper">
      <Header />
      <Menu />
      <main>{children}</main>
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
