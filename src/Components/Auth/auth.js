import axios from "axios";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(data) {
    const apiBaseUrl = "http://localhost:8080/user-portal/api/validateUser";
    axios
      .post(apiBaseUrl, data)
      .then(response => {
        if (response.status === 200) {
          if (response.data.length > 0) {
            // Set the state to true
            this.authenticated = true;
            console.log("Login successfull");
          } else {
            this.authenticated = false;
            console.log("Login Unsuccessfull");
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  sigin(callback) {
    if (this.isLoggedIn()) {
      this.authenticated = true;
    }
    callback();
  }

  logout(callback) {
    if (!this.isLoggedIn()) {
      this.authenticated = false;
    }
    callback();
  }

  isAuthenticated() {
    return this.isLoggedIn();
  }

  isLoggedIn() {
    if (localStorage.getItem("isLoggedIn") === "true") {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
    return this.authenticated;
  }
}

export default new Auth();
