import React, { Component } from "react";
import "./header.css";

import price from "./price.png";
import weight from "./weight.png";
import goods from "./product.png";
import Result from "../result/Result";

export default class Header extends Component {
  render() {
    const {
      input_1,
      changeInput_1,
      input_2,
      changeInput_2,
      input_3,
      changeInput_3,
      input_4,
      changeInput_4,
      inputActive_1,
      inputActive_2,
      inputActive_3,
      inputActive_4,
      priceKgItem_1,
      priceKgItem_2,
    } = this.props;

    const styleInput_1 = input_1.active ? "active" : "";
    const styleInput_2 = input_2.active ? "active" : "";
    const styleInput_3 = input_3.active ? "active" : "";
    const styleInput_4 = input_4.active ? "active" : "";

    return (
      <div className="header">
        <div className="row2">
          <img src={goods} alt="goods" width={75} height={75}></img>
          <div className="header-input-1">
            <input
              className={styleInput_1}
              readOnly
              value={input_1.value}
              onChange={changeInput_1}
              onClick={inputActive_1}
              placeholder="grams of goods 1..."
            ></input>
            <img
              className="weight-img"
              src={weight}
              alt="weight"
              width={75}
              height={75}
            ></img>
          </div>
          <div className="header-input-2">
            <input
              readOnly
              className={styleInput_2}
              value={input_2.value}
              onChange={changeInput_2}
              onClick={inputActive_2}
              placeholder="UAH of goods 1..."
            ></input>
            <img
              className="price-img"
              src={price}
              alt="price"
              width={75}
              height={75}
            ></img>
          </div>
        </div>
        <div className="row3">
          <img src={goods} alt="goods" width={75} height={75}></img>
          <div className="header-input-1">
            <input
              readOnly
              className={styleInput_3}
              value={input_3.value}
              onChange={changeInput_3}
              onClick={inputActive_3}
              placeholder="grams of goods 2..."
            ></input>
          </div>
          <div className="header-input-2">
            <input
              readOnly
              className={styleInput_4}
              value={input_4.value}
              onChange={changeInput_4}
              onClick={inputActive_4}
              placeholder="UAH of goods 2..."
            ></input>
          </div>
        </div>
        <Result priceKgItem_1={priceKgItem_1} priceKgItem_2={priceKgItem_2} />
      </div>
    );
  }
}
