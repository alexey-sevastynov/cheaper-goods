import React, { Component } from "react";
import "./result.css";

export default class Result extends Component {
  render() {
    return (
      <div className="results">
        <p>1 item = 44 UAH per KG</p>
        <p>2 item = 45 UAH per KG</p>
        <p>1 item cheaper!</p>
      </div>
    );
  }
}
