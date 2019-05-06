import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Menu from "./Components/Menu";
import Checkout from "./Components/Checkout";
import Header from "./Components/Tamplate/Header";
import Main from "./Components/Tamplate/Main";
import Login from "./Components/Login";
import Register from "./Components/Register";
import DummyApp from "./auth";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAutheticated: false
        };
    }

    userAuthenticated = authenticated => {
        this.setState({ isAutheticated: authenticated })
    }

    render() {

        const childProps = {
            isAutheticated: this.state.isAutheticated,
            userAuthenticated: this.userAuthenticated
        }

        console.log(DummyApp.fakeAuthCentralState);

        return (
            <DummyApp />
            // <Router childProps={childProps}>
            //   <Header />
            //   <div className="App">
            //     <div className="container">
            //       <Route exact path="/" component={Main} />
            //       <Route exact path="/login" component={Login} />
            //       <Route exact path="/register" component={Register} />
            //       <Route exact path="/menu" component={Menu} />
            //       <Route exact path="/checkout" component={Checkout} />
            //     </div>
            //   </div>
            // </Router>
        );
    }
}

export default App;
