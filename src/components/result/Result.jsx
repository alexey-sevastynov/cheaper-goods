import React, { Component } from "react";
import "./result.css";

export default class Result extends Component {
  render() {
    const { priceKgItem_1, priceKgItem_2 } = this.props;

    console.log(priceKgItem_1, priceKgItem_2);

    const compare = +priceKgItem_1 > +priceKgItem_2;

    return (
      <div className="results">
        <p>{compare ? 2 : 1} goods cheaper!</p>
        <p className="ukr">({compare ? 2 : 1} товар дешевше!)</p>
        <p>1 goods = {priceKgItem_1} UAH per KG</p>
        <p>2 goods = {priceKgItem_2} UAH per KG</p>
      </div>
    );
  }
}
