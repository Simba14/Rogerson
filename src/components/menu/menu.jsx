import React from "react"
import { Link } from "gatsby"
import text from "../../text/benText"

import "./Menu.scss"

const Menu = () => {
  return (
    <div className="Menu">
      {text.menu.map(item => (
        <Link
          key={item.link}
          to={item.link}
          activeClassName="active"
          partiallyActive={true}
        >
          {item.text}
        </Link>
      ))}
    </div>
  )
}

export default Menu
