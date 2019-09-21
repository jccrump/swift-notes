import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Note extends Component {
  render() {
    return (
      <Link
        to={{
          pathname: `/user/note/${this.props.index}`,
          body: this.props.note,
          title: this.props.title,
          date: this.props.date,
          index: this.props.index
        }}
        className="note-link"
      >
        <div className="note-wrapper">
          <h4>{this.props.title}</h4>
          <p>{this.props.note}</p>
          <h6>{this.props.date}</h6>
        </div>
      </Link>
    );
  }
}
