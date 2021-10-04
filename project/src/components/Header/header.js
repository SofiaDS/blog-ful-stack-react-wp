import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import App from "../../App.js";
import Error from "../Error/error.js";

export default class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <img></img>
        <h3>Hi Hi im the header</h3>
        <BrowserRouter>
          <nav>
            <Link to="/">
              {App}
              Home
            </Link>
            <Link to="/about-us">
              {App}
              About us
            </Link>
            <Link to="/react">
              {App}
              React
            </Link>
            <Link to="/wp">
              {App}
              wp
            </Link>
          </nav>

          <Switch>
            <Route path="/" exact>
              <App />
            </Route>
            <Route path="/add-user">
              <App />
            </Route>
            <Route path="/users/:id">
              <App />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
