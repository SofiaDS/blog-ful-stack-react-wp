import React from "react";
import ArticleModel from "../../models/articleModel.js";
import { Link } from "react-router-dom";

export default class ArticleCom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
        new ArticleModel(1, "images/locomotiva.jpg", "title", "preview", "body"),
        new ArticleModel(2, "images/locomotiva.jpg", "title", "preview", "body"),
        new ArticleModel(3, "images/locomotiva.jpg", "title", "preview", "body"),
        new ArticleModel(4, "images/locomotiva.jpg", "title", "preview", "body"),
        new ArticleModel(5, "images/locomotiva.jpg", "title", "preview", "body"),
        new ArticleModel(6, "images/locomotiva.jpg", "title", "preview", "body"),
        new ArticleModel(7, "images/locomotiva.jpg", "title", "preview", "body"),
        new ArticleModel(8, "images/locomotiva.jpg", "title", "preview", "body"),
      ]
    }

  }
  render() {
    const card = this.state.articles.map((article) => (
      <div className="card flex-child shadow" key= { article.id }>
          <div className="img">
            { article.img }
          </div>
          <div className="title">
            { article.title }
          </div>
          <div className="preview">
            { article.preview }
          </div>
          <button type="button" className="btn btn-outline-dark">
            <Link to="">
              Read More...
            </Link>
          </button>
      </div>
    ))
    return (
      <div className="flex-parent">
        { card }
      </div>
    )
  }
}
