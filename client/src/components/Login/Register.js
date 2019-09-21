import React, { Component } from "react";
import axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    let user = this.state;

    axios
      .post("/api/user/register", user)
      .then(result => {
        if (result.data) {
          localStorage.setItem("access-token", result.data);
          window.location.href = "/login";
        }
      })
      .catch(err => console.log(err));
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
                name="first_name"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                onChange={this.handleInputChange}
                name="last_name"
                placeholder="Last Name"
                required
              />
              <input
                onChange={this.handleInputChange}
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                onChange={this.handleInputChange}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <input
                onChange={this.handleInputChange}
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
