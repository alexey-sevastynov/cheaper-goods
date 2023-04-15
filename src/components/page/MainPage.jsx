import React, { Component } from "react";
import Header from "../header/Header";

export default class MainPage extends Component {
  render() {
    const {
      input_1,
      input_2,
      input_3,
      input_4,
      changeInput_1,
      changeInput_2,
      changeInput_3,
      changeInput_4,
      inputActive_1,
      inputActive_2,
      inputActive_3,
      inputActive_4,
      priceKgItem_1,
      priceKgItem_2,
    } = this.props;

    return (
      <>
        <Header
          input_1={input_1}
          changeInput_1={changeInput_1}
          input_2={input_2}
          changeInput_2={changeInput_2}
          input_3={input_3}
          changeInput_3={changeInput_3}
          input_4={input_4}
          changeInput_4={changeInput_4}
          inputActive_1={inputActive_1}
          inputActive_2={inputActive_2}
          inputActive_3={inputActive_3}
          inputActive_4={inputActive_4}
          priceKgItem_1={priceKgItem_1}
          priceKgItem_2={priceKgItem_2}
        />
      </>
    );
  }
}
