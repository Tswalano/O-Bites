import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Menu from "./Components/Menu";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { ProtectedRoute } from "./Components/Auth/ProtectedRoute";
import { NotFoundPage } from "./Components/Page-404";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Menu} />
            <ProtectedRoute path="/checkout" component={Checkout} />
            <ProtectedRoute path="*" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
