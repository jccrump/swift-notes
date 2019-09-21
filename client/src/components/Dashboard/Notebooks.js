import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Notebooks extends Component {
  render() {
    let links = this.props.notebooks.map(notebook => {
      return (
        <Link
          to="/user"
          onClick={() => this.props.changeNotebook(notebook.name)}
          className="notebook-link"
        >
          {notebook.name[0]}
        </Link>
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
