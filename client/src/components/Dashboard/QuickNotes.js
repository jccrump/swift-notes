import React, { Component } from "react";
import axios from "axios";

export default class QuickNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quicknote: "",
      timeout: 0
    };
  }
  handleNoteChange = e => {
    var searchText = e.target.value; // this is the search text
    this.setState({
      quicknote: searchText
    });
    if (this.state.timeout) clearTimeout(this.state.timeout);
    this.state.timeout = setTimeout(() => {
      axios({
        method: "post",
        url: "/api/user/quicknote",
        data: { quicknote: searchText },
        headers: { Authorization: localStorage.getItem("access-token") }
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, 2000);
  };
  componentWillMount() {
    axios
      .get("/api/user/quicknote", {
        headers: { Authorization: localStorage.getItem("access-token") }
      })
      .then(response => {
        this.setState({
          quicknote: response.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="quicknotes-wrapper">
        <div className="title">Quick Notes</div>
        <div className="quicknote">
          <textarea
            value={this.state.quicknote}
            onChange={e => this.handleNoteChange(e)}
            rows="10"
            data-min-rows="10"
            className="autoExpand"
            placeholder="Type here..."
          />
        </div>
      </div>
    );
  }
}
