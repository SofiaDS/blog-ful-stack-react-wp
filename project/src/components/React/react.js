import React from "react";
import { objectToArt } from '../../models/articleModel.js';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

//sezione in cui appaiono gli art solo dir eact
class ReactSection extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      posts: []
    }
  }
  
  componentDidMount() {
    fetch(`http://epicode.test/bedrock/web/wp-json/wp/v2/posts?categories=2`)
      .then((res) => res.json())
      .then((articles) => {
        this.setState({
          posts: articles.map((article) => objectToArt(article)),
        });
      });
  }

  render() {
    return <div>Im the react section</div>;
  }
}
export default withRouter(ReactSection);