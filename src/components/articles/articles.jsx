import React from "react"
import { Link } from "gatsby"
import { articles, subpath } from "./articlesContent"

import "./articles.scss"

const Articles = () => {
  return (
    <div className="Articles">
      {articles.map(article => (
        <div key={article.title} className={"Article"}>
          <Link className="ThumbnailLink" to={`${subpath}/${article.slug}`}>
            <div
              className="Thumbnail"
              style={{ backgroundImage: `url(${article.image})` }}
              alt={article.title}
            />
          </Link>
          <Link className="Titles" to={`${subpath}/${article.slug}`}>
            <div>{article.title}</div>
            <div className="Title2">{article.title}</div>
            <div className="Title3">{article.title}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Articles
