import React from "react";
import ArticleModel from "../../models/articleModel.js";

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
      ]
    }

  }
  render() {
    const card = this.state.articles.map((article) => (
      <div className="card flex-child" key= { article.id }>
          <div className="img">
            { article.img }
          </div>
          <div className="title">
            { article.title }
          </div>
          <div className="preview">
            { article.preview }
          </div>
          <button className="button">
            Read more...
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
