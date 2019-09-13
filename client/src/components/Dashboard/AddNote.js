import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../style/addnote.css";

export default class AddNote extends Component {
  render() {
    let d = new Date();
    let n = d.toDateString();
    return (
      <div className="main-wrapper">
        <div className="add-notes">
          <div className="notes-search-bar-wrapper">
            <input type="text" placeholder="Title..." />
            <Link to="/user">
              <FaTimes />
            </Link>
          </div>
          <div className="note-date">Date Created: {n}</div>
          <div className="note-body">
            <textarea rows="30" />
          </div>
          <div className="note-bottom-buttons">
            <button className="delete">{this.props.exit}</button>
            <button className="save">Save</button>
          </div>
        </div>
      </div>
    );
  }
}
