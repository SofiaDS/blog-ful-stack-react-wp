import React from "react";
import { objectToArt } from "../../models/articleModel.js";
import { Link } from "react-router-dom";

export default class ArticleCom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    fetch("http://epicode.test/bedrock/web/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((articles) => {
        this.setState({
          articles: articles.map((article) => objectToArt(article)),
        });
      });
  }

  render() {
    const card = this.state.articles.map((article) => (
      <div className="cards " key={article.id}>
        <div className="title"> {article.title} </div>
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: article.excerpt }}
        ></div>
        <button type="button" className="button">
          <Link to={`/posts/${article.id}`}>Read More...</Link>
        </button>
      </div>
    ));
    return <div className="flex-parent backgroundC"> {card} </div>;
  }
}
