import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";
import Header from "../Tamplate/Header";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return (
            <div>
              <Header />
              <div className="container">
                <Component {...props} />
              </div>
            </div>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
