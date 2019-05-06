import React, { Component } from 'react'
import logo from '../../logo.png'

export class Main extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo mt-5 mb-3" alt="logo" />
        <p className="lead">
          Welcome to O<span className="text-blue">-Bites</span> fast food
        </p>
      </div>
    );
  }
}

export default Main
