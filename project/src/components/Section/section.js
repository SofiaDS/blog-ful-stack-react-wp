import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { ArticleModel, objectToArt } from "../../models/articleModel.js";

class DynSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catArt: [],
    };
  }

  componentDidMount() {
    fetch(`http://epicode.test/bedrock/web/wp-json/wp/v2/posts?categories=${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((cats) => {
        this.setState({
          catArt: cats.map((art) => objectToArt(art))
        });
      });
  }

  render() {
    const cards = this.state.catArt.map((article) => (
      <div key={article.id}>
        <div>{article.title}</div>
        <div>{article.cat}</div>
        <div>{article.content}</div>
      </div>
    ))
    return <div> {cards}</div>;
  }
}
export default withRouter(DynSection);
