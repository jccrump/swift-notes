import React, { Component } from "react";

export default class QuickNotes extends Component {
  render() {
    return (
      <div className="quicknotes-wrapper">
        <div className="title">Quick Notes</div>
        <div className="quicknote">
          <textarea rows="22" />
        </div>
      </div>
    );
  }
}
