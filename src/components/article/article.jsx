import React from "react"
import Layout from "../layout/layout.js"

import "./article.scss"

const Article = ({ pageContext: { article } }) => {
  const { content, image, title } = article

  return (
    <Layout>
      <div className="Article">
        <div className="Heading">
          <div className="Titles">
            <div>{title}</div>
            <div className="Title2">{title}</div>
            <div className="Title3">{title}</div>
          </div>
          <div
            className="Image"
            style={{ backgroundImage: `url(${image})` }}
            alt={title}
          />
        </div>
        <div className="Content">{content}</div>
      </div>
    </Layout>
  )
}

export default Article
