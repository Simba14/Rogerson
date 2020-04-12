import React from "react"
import text from "../../text/benText"

import "./contact.scss"

const Contact = () => (
  <div>
    <div className="detail">
      <div className="heading">[Email]</div>
      <a href={`mailto:${text.contactDetails.email}`}>
        {text.contactDetails.email}
      </a>
    </div>
    <div className="detail">
      <div className="heading">[Digits]</div>
      <div>{text.contactDetails.number}</div>
    </div>
  </div>
)

export default Contact
