import React from "react"
import text from "../../text/benText"

import "./bio.scss"

const Bio = () => {
  return <div className={"Bio"} dangerouslySetInnerHTML={text.bio} />
}

export default Bio
