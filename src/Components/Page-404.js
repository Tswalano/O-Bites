import React from "react";

export const NotFoundPage = props => {
  return (
    <React.Fragment>
      <div class="error-box">
        <div class="error-body text-center">
          <h1>404</h1>
          <h3 class="text-uppercase">Page Not Found !</h3>
          <p class="text-muted m-t-30 m-b-30">
            YOU SEEM TO BE TRYING TO FIND HIS WAY HOME
          </p>
          <a href="/" class="btn btn-outline-primary m-b-40">
            Back to home
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};
