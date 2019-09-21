import React, { Component } from "react";
import { FaRegStickyNote, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Note from "../../components/Dashboard/Note";

export default class MainNote extends Component {
  componentWillMount() {}
  render() {
    let notes = this.props.notes.map(note => {
      return (
        <Note
          index={this.props.notes.indexOf(note)}
          title={note.title}
          note={note.body}
          date={note.date_created}
        />
      );
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
