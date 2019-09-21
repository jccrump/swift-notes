import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../style/addnote.css";

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
      body: props.location.body || "",
      date: props.location.date,
      title: props.location.title || "",
      index: props.location.index || ""
    };
  }
  componentDidMount() {
    if (this.state.index === "") {
    }
  }
  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleBodyChange = e => {
    this.setState({
      body: e.target.value
    });
  };
  render() {
    let d = new Date();
    let n = d.toDateString();
    return (
      <div className="main-wrapper">
        <div className="add-notes">
          <div className="notes-search-bar-wrapper">
            <input
              type="text"
              placeholder="Title..."
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
            <Link to="/user">
              <FaTimes />
            </Link>
          </div>
          <div className="note-date">
            Date Created: {this.state.date ? this.state.date : n}
          </div>
          <div className="note-body">
            <textarea
              onChange={this.handleBodyChange}
              value={this.state.body}
              rows="30"
            />
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
