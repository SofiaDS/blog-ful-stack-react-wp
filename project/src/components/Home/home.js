import React from "react";
import ArticleCom from "../ArticleComp/articleComp.js";
//QUESTA è LA HOME CHE DOVRà CONTENERE TUTTI GLI ARTICOLI
export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <ArticleCom />
      </div>
    );
  }
}
