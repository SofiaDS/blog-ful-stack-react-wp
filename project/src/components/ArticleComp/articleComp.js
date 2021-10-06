import React from "react";
import { ArticleModel, objectToArt } from "../../models/articleModel.js";
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
      <div className="cards shadow" key={ article.id }>
        <img src={ article.img } className="img"></img>
        <div className="title">{ article.title }</div>
        <div> { article.cat } </div>
        <div className="preview" dangerouslySetInnerHTML={{__html:article.content}} ></div>
        <button type="button" className="btn btn-outline-dark">
          <Link to="">Read More...</Link>
        </button>
      </div>
    ));
    return <div className="flex-parent">{ card }</div>;
  }
}
