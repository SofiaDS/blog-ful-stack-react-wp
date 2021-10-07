import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { objectToArt } from "../../models/articleModel.js";

let isLoading = false;

class DynSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catArt: [],
    };
  }

  read() {
    isLoading = true;

    fetch(`http://epicode.test/bedrock/web/wp-json/wp/v2/posts?categories=${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((cats) => {

        this.setState({
          catArt: cats.map((art) => objectToArt(art)),
        });
      });
  }

  componentDidMount() {
    this.read();
  }

  componentDidUpdate() {
    if (isLoading) {
      isLoading = false;
      return;
    }

    this.read();
  }

  render() {
    const cards = this.state.catArt.map((article) => (
      <div className ="cards" key={ article.id }>
        <div className="title">{ article.title }</div>
        <div className="preview" dangerouslySetInnerHTML= {{__html:article.content }}></div>

        <button type="button" className="button">
          <Link to={`/posts/${article.id}`}>Read More...</Link>
        </button>
      </div>
    ));
    return <div className="flex-parent backgroundC"> {cards} </div>;
  }
}

export default withRouter(DynSection);
