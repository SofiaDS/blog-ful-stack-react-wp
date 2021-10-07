import React from "react";
import { withRouter } from "react-router";

class ArtDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      det: [],
    };
  }

  componentDidMount() {
    fetch(`http://epicode.test/bedrock/web/wp-json/wp/v2/posts/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((article) => {
        this.setState({
          det: article
        });
      });
  }

  render() {
    return (
      <div>
        <h1> { this.state.det?.title?.rendered } </h1>
        <p dangerouslySetInnerHTML= {{__html:this.state.det?.content?.rendered }} ></p>
      </div>
    );
  }
}
export default withRouter(ArtDetail);
