import React from "react";
import { withRouter } from "react-router";

let isLoading = false;

class Pages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageContent: [],
    };
  }

  read() {
    isLoading = true;

    fetch(
      `http://epicode.test/bedrock/web/wp-json/wp/v2/pages/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((page) => {
        this.setState({
          pageContent: page,
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
    const cards = (
      <div>
        <h1>{this.state.pageContent?.title?.rendered}</h1>
        <p dangerouslySetInnerHTML={{__html:this.state.pageContent?.content?.rendered}}></p>
      </div>
    );
    return <div> {cards}</div>;
  }
}
export default withRouter(Pages);
