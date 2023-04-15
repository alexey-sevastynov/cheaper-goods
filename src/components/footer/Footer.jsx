import React, { Component } from "react";
import "./footer.css";

import remove from "./delete.png";
import brain from "./light-bulb.png";

export default class Footer extends Component {
  render() {
    const { actionButton, result } = this.props;
    return (
      <div className="footer">
        <div className="row1">
          <div
            className="circle"
            onClick={() => {
              actionButton(1);
            }}
          >
            1
          </div>
          <div
            className="circle"
            onClick={() => {
              actionButton(2);
            }}
          >
            2
          </div>
          <div
            className="circle"
            onClick={() => {
              actionButton(3);
            }}
          >
            3
          </div>
          <div className="circle">!</div>
        </div>
        <div className="row1">
          <div
            className="circle"
            onClick={() => {
              actionButton(4);
            }}
          >
            4
          </div>
          <div
            className="circle"
            onClick={() => {
              actionButton(5);
            }}
          >
            5
          </div>
          <div
            className="circle"
            onClick={() => {
              actionButton(6);
            }}
          >
            6
          </div>
          <div className="circle">!</div>
        </div>
        <div className="row1">
          <div
            className="circle"
            onClick={() => {
              actionButton(7);
            }}
          >
            7
          </div>
          <div
            className="circle"
            onClick={() => {
              actionButton(8);
            }}
          >
            8
          </div>
          <div
            className="circle"
            onClick={() => {
              actionButton(9);
            }}
          >
            9
          </div>
          <div className="circle">!</div>
        </div>
        <div className="row1">
          <div
            className="circle"
            onClick={() => {
              actionButton(0);
            }}
          >
            0
          </div>
          <div
            className="circle"
            onClick={() => {
              actionButton(11);
            }}
          >
            ,
          </div>
          <div
            className="circle"
            onClick={() => {
              actionButton(12);
            }}
          >
            <img
              className="icon"
              src={remove}
              width={42}
              height={42}
              alt="del"
            />
          </div>
          <div className="circle" onClick={result}>
            <img
              className="icon"
              src={brain}
              width={60}
              height={60}
              alt="res"
            />
          </div>
        </div>
      </div>
    );
  }
}
