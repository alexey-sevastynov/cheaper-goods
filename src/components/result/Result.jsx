import React, { Component } from "react";
import "./result.css";

export default class Result extends Component {
  render() {
    const { priceKgItem_1, priceKgItem_2 } = this.props;

    const compare = +priceKgItem_1 > +priceKgItem_2;

    return (
      <div className="results">
        <p>1 item = {priceKgItem_1} UAH per KG</p>
        <p>2 item = {priceKgItem_2} UAH per KG</p>
        <p>{compare ? 2 : 1} item cheaper!</p>
      </div>
    );
  }
}
