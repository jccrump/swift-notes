import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard/Main";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import "./style/login.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/user" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
