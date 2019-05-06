import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  Link,
  withRouter,
  Redirect
} from "react-router-dom";

const AuthenticationState = {
  isAuthenticated: false,
  authenticate(callback) {
    // Setup the login details
    this.isAuthenticated = true;
    setTimeout(callback, 300);
  },
  logout(callback) {
    // Logout
    this.isAuthenticated = false;
    setTimeout(callback, 300);
  }
};

class Authentication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferral: false
    };
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferral } = this.state;

    if (redirectToReferral === true) {
      this.props.history.push(from.pathname);
    }

    return (
      <div>
        <p>Please, Auth is requred!!!</p>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default Authentication;
