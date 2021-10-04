import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import App from "../../App.js";
import Home from "../Home/home.js";
import Error from "../Error/error.js";
import About from "../About/about.js";
import ReactSection from "../React/react.js";

export default class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <img></img>
        <h3>Hi Hi im the header</h3>
        <BrowserRouter>
          <nav>
            <Link to="/">
              { Home }
              Home
            </Link>
            <Link to="/about-us">
              { About }
              About us
            </Link>
            <Link to="/react">
              { ReactSection }
              React
            </Link>
            <Link to="/wp">
              {App}
              wp
            </Link>
          </nav>

            <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about-us">
              <About />
            </Route>
            <Route path="/react">
              <React />
            </Route>
            <Route path="/wp">
              <WordPress />
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
