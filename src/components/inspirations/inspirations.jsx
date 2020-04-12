import React from "react"

import content from "./content"
import "./inspirations.scss"

const Inspirations = () => {
  return (
    <div className="Container">
      {content.map(item => (
        <div
          className="Image"
          key={item.name}
          style={{ backgroundImage: `url(${item.url})` }}
        />
      ))}
    </div>
  )
}

export default Inspirations
