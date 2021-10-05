import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "../Home/home.js";
import Error from "../Error/error.js";
import About from "../About/about.js";
import ReactSection from "../React/react.js";
import Wp from "../Wp/wp.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Header extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <nav className="navbar navbar expand-expand-lg">
            <img src="images/logo.png" className="logoHome"></img>
            <Link to="/">
              {Home}
              Home
            </Link>
            <Link to="/about-us">
              {About}
              About us
            </Link>
            <Link to="/react">
              {ReactSection}
              React
            </Link>
            <Link to="/wp">
              {Wp}
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
              <ReactSection />
            </Route>
            <Route path="/wp">
              <Wp />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
