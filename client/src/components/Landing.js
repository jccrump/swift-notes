import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="login-wrapper">
          <div className="logo">
            <span>Swift</span> Notes
          </div>
          <div className="button-wrapper">
            <Link to="/register" className="create-account">
              Create Account
            </Link>
            <h3>or</h3>
            <Link to="/login" className="login">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
