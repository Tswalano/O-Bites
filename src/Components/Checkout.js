import React, { Component } from "react";
import Main from "./Tamplate/Main";
import axios from "axios";

export class Checkout extends Component {
  //  state = { orderItems: [] };

  constructor(props) {
    super(props);

    this.state = {
      customerInfo: [],
      customerOrder: this.props.location.state
    };
  }

  cancelOrder() {
    // Canceling by redirecting user to order page
    this.props.history.push("/");
  }

  handleOnChange = event => {
    console.log("OnChange for = " + [event.target.name]);
    this.setState({
      customerOrder: {
        ...this.state.customerOrder,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const order = this.state.customerOrder;
    console.log(order);

    const apiBaseUrl = "http://localhost:8080/user-portal/api/order";
    axios
      .post(apiBaseUrl, order)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          errorMessage: "Sorry something went wrong on our server side!"
        });
      });
  };

  onChange = e =>
    this.setState({ customerInfo: { [e.target.name]: e.target.value } });

  render() {
    const { orderCost, orderName, ingredients } = this.props.location.state;
    const listItems = Object.keys(ingredients).map(function(x) {
      return (
        <li key={x} className="list-group-item text-secondary">
          <small className="float-left">{ingredients[x]}</small>
          <button className="btn btn-sm btn-danger float-right">X</button>
        </li>
      );
    });
    return (
      <div>
        <Main />
        <div className="row">
          <div className="col-md-4 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span>Your Items</span>
            </h4>
            <ul className="list-group mb-3 lead">
              <li className="list-group-item text-secondary d-flex justify-content-between">
                <span className="float-left">{orderName}</span>
                <span className="float-right">R {orderCost}.00</span>
              </li>
              {listItems}
              <li className="list-group-item text-secondary d-flex justify-content-between">
                <span>Total (ZAR)</span>
                <strong>R {orderCost}.00</strong>
              </li>
            </ul>
          </div>

          <div className="col-md-8">
            <div className="row">
              <h4 className="mb-3 ml-3 float-left">Billing address</h4>
            </div>

            <form className="text-left lead" onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    required=""
                    onChange={this.handleOnChange}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    required=""
                    onChange={this.handleOnChange}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="mb-3 col-md-12">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    placeholder="1234 Main St"
                    required=""
                    onChange={this.handleOnChange}
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="address2">Address Line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address2"
                    id="address2"
                    placeholder="Apartment or unit Number"
                    required=""
                    onChange={this.handleOnChange}
                  />
                  <div className="invalid-feedback">
                    Valid address 2 is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="number">Cellphone Numer</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">+27 </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="number"
                      id="number"
                      placeholder="Cellphone Number"
                      required=""
                      onChange={this.handleOnChange}
                    />
                    <div className="invalid-feedback">
                      Your Cellphone number is required.
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-outline-danger float-left"
                  onClick={this.cancelOrder.bind(this)}
                >
                  Cancel
                </button>
                <button className="btn btn-success float-right" type="submit">
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "2px 7px",
  borderRadius: "50%",
  cursor: "pointer"
};

export default Checkout;
