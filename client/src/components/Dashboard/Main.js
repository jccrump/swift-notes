import React, { Component } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}
