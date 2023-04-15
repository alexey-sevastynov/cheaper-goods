import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

export default class Layout extends Component {
  render() {
    const { actionButton, actionButton_Remove, result, cleaner, togglePage } =
      this.props;
    return (
      <div className="container">
        <Outlet />
        <Footer
          actionButton={actionButton}
          actionButton_Remove={actionButton_Remove}
          result={result}
          cleaner={cleaner}
          togglePage={togglePage}
        />
      </div>
    );
  }
}
