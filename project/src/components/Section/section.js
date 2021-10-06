import React from "react";

export default class DynSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cat: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://epicode.test/bedrock/web/wp-json/wp/v2/categories/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((cats) => {
        this.setState({
          cat: cats,
        });
      });
  }

  render() {
    return <div> ciao sono una sexione dinamica</div>;
  }
}
