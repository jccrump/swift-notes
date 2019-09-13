import React, { Component } from "react";
import { FaRegStickyNote, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class MainNote extends Component {
  componentWillMount() {}
  render() {
    let notes = this.props.notes.map(note => {
      return <p>{note.body}</p>;
    });
    return (
      <div className="main-wrapper">
        <div className="main-notes">
          <div className="notes-search-bar-wrapper">
            <input type="text" placeholder="Search..." />
            <button>
              <FaSearch />
            </button>
            <Link to="/user/add">
              <FaRegStickyNote />
            </Link>
          </div>
          <div className="notes-list">{notes}</div>
        </div>
      </div>
    );
  }
}
