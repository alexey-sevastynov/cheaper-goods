import React, { Component } from "react";
import Result from "../result/Result";

export default class extends Component {
  render() {
    const { priceKgItem_1, priceKgItem_2 } = this.props;
    return (
      <>
        <Result priceKgItem_1={priceKgItem_1} priceKgItem_2={priceKgItem_2} />
      </>
    );
  }
}
