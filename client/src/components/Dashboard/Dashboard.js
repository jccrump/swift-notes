import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "../../style/dashboard.css";
import Notebooks from "./Notebooks";
import MainNote from "./MainNote";
import SideNote from "./SideNote";
import AddNote from "./AddNote";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notebooks: [],
      notes: []
    };
  }
  componentWillMount() {
    axios
      .get("/api/user/notes", {
        headers: { Authorization: localStorage.getItem("access-token") }
      })
      .then(response => {
        this.setState({
          notebooks: response.data,
          notes: response.data[0].notes
        });
      })
      .catch(err => console.log(err));
  }
  handleNotebookChange = name => {
    let notes = this.state.notebooks.filter(notebook => {
      if (notebook.name == name) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({
      notes: notes[0].notes
    });
  };
  render() {
    return (
      <div className="dashboard-wrapper">
        <Notebooks
          changeNotebook={this.handleNotebookChange}
          notebooks={this.state.notebooks}
        />
        <Switch>
          <Route
            exact
            path="/user"
            component={() => <MainNote notes={this.state.notes} />}
          />
          <Route
            path="/user/add"
            component={() => (
              <AddNote exit={"Cancel"} title={""} body={""} date={""} />
            )}
          />
        </Switch>

        <SideNote />
      </div>
    );
  }
}
