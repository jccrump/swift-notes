import React, { Component } from "react";
import QuickNotes from "./QuickNotes";
import TodoList from "./TodoList";
import axios from "axios";

export default class SideNote extends Component {
  render() {
    return (
      <div className="sidenotes-wrapper">
        <QuickNotes />
        {/* <TodoList /> */}
      </div>
    );
  }
}
