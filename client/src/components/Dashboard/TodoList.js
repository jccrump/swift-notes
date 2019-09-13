import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    return (
      <div className="todo-wrapper">
        <div className="title">To-Do List</div>
        <div className="todo-list"></div>
      </div>
    );
  }
}
