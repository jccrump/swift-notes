import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();

    let cred = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/api/user/login", cred)
      .then(result => {
        if (result.data) {
          localStorage.setItem("access-token", result.data);
          window.location.href = "/user";
        }
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="main-wrapper">
        <div className="login-wrapper">
          <div className="logo">
            <span>Swift</span> Notes
          </div>
          <div className="register-form-wrapper">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="password"
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
                required
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
