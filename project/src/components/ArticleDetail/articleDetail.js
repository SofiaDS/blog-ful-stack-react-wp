import React from "react";
import { objectToArt } from "../../models/articleModel.js";

export default class ArtDetail extends React.Component {
    constructor(props) {
        super(props);

        this.setState({
            det: []
        })
    }
}