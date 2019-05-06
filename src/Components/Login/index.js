import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Main from "../Tamplate/Main";
import axios from "axios";
import auth from "../Auth/auth";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleClick(event) {
    event.preventDefault();
    let credentials = {
      username: this.state.username,
      password: this.state.password
    };

    const apiBaseUrl = "http://localhost:8080/user-portal/api/login";
    axios
      .post(apiBaseUrl, credentials)
      .then(response => {
        if (response.status === 200) {
          if (response.data.length > 0) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("token", "admin");
            auth.sigin(() => {
              this.props.history.push("/");
            });
            console.log("Login successfull");
          } else {
            console.log(response);
            this.setState({
              errorMessage: "Wrong email or password, Please try again"
            });
          }
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          errorMessage: "Sorry something went wrong on our server side!"
        });
      });
  }

  render() {
    return (
      <div className="container">
        <Main />
        <div className="row justify-content-center align-items-center">
          <div className="card card-body bg-dark col-lg-4 col-md-8 col-sm-8 my-2">
            <h1 className="h5 my-3 font-weight-normal text-center">
              Please sign in
              <small className="lead mt-3">
                <p className="text-danger">{this.state.errorMessage}</p>
              </small>
            </h1>
            <p className="text-center error text-danger" />
            <form className="text-left">
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    onChange={event =>
                      // console.log(event.target.value)
                      this.setState({ username: event.target.value })
                    }
                  />
                  {/* <div className="help-block">Username is required</div> */}
                </div>
              </div>

              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                  />
                  {/* <div className="help-block">Password is required</div> */}
                  <button
                    className="btn btn-success float-right mt-3"
                    type="submit"
                    onClick={event => this.handleClick(event)}
                    disabled={!this.validateForm()}
                  >
                    Login
                  </button>
                  <Link
                    className="text-blue small float-left mt-3"
                    to="/register"
                  >
                    Create an Account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
