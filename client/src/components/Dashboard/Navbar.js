import React, { Component } from "react";
import "../../style/user.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div></div>
        <div className="logo">
          <span>Swift</span> Notes
        </div>
        <button className="settings">Settings</button>
      </div>
    );
  }
}
