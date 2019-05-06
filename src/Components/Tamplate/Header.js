import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import auth from "../Auth/auth";

export class Header extends Component {
  handleClick() {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("token");
    auth.logout(() => {});
  }

  render() {
    return (
      <div>
        {/* A grey horizontal navbar that becomes vertical on small screens */}
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" height="20" />
            </Link>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Link 1
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Link 2
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Link 3
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={this.handleClick}>
                  Admin [Logout]
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
