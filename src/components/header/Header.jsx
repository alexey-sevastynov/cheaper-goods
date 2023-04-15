import React, { Component } from "react";
import "./header.css";

import price from "./price.png";
import weight from "./weight.png";
import goods from "./product.png";

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
    } = this.props;

    return (
      <div className="header">
        <div className="row2">
          <img src={goods} alt="goods" width={75} height={75}></img>
          <div className="header-input-1">
            <input
              readOnly
              value={input_1.value}
              onChange={changeInput_1}
              onClick={inputActive_1}
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
              value={input_2.value}
              onChange={changeInput_2}
              onClick={inputActive_2}
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
              value={input_3.value}
              onChange={changeInput_3}
              onClick={inputActive_3}
            ></input>
          </div>
          <div className="header-input-2">
            <input
              readOnly
              value={input_4.value}
              onChange={changeInput_4}
              onClick={inputActive_4}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
