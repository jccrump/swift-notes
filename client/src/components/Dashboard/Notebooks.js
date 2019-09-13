import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default class Notebooks extends Component {
  render() {
    let links = this.props.notebooks.map(notebook => {
      return (
        <button
          onClick={() => this.props.changeNotebook(notebook.name)}
          className="notebook-link"
        >
          {notebook.name[0]}
        </button>
      );
    });
    return (
      <div className="notebooks-wrapper">
        {links}
        <button className="add-notebook">
          <FaPlus />
        </button>
      </div>
    );
  }
}
