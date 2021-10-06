import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Home from "../Home/home.js";
import Error from "../Error/error.js";
import DynSection from "../Section/section.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      cat: [],
    };
  }

  componentDidMount() {
    fetch("http://epicode.test/bedrock/web/wp-json/wp/v2/categories/")
      .then((res) => res.json())
      .then((categories) => {
        this.setState({ cat: categories });
      });
  }

  render() {
    const category = this.state.cat.map((cat) => (
      <span key={cat.id}>
        <Link to={`/categories/${cat.id}`}>
          {cat.name}
        </Link>
      </span>
    ));
    const navBar = (
      <BrowserRouter>
        <div className="container-fluid">
          <nav className="navbar navbar expand-expand-lg">
            <img src="images/logo.png" className="logoHome"></img>
            <Link to="/">
              Home
            </Link>
            {category}
          </nav>

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/categories/:id">
              <DynSection />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
    return <div>{navBar}</div>;
  }
}
export default withRouter(Header);