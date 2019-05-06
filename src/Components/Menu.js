import React, { Component } from "react";
import Slider from "react-slick";
import menu1 from "../Assets/menu-1.jpg";
import menu2 from "../Assets/menu-2.jpg";
import menu3 from "../Assets/menu-3.jpg";
import Main from "./Tamplate/Main";

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldSlide: 0,
      activeSlide: 0,

      todo: [],

      order: [
        {
          id: 1,
          orderName: "Pap & Gravey",
          orderCost: 35,
          ingredients: ["Pap", "Gravey", "Steak", "Juice"]
        },
        {
          id: 2,
          orderCost: 25,
          orderName: "Fish & Chips",
          ingredients: ["Chips", "Fish", "Vianna", "Bunns"]
        }
      ]
    };
  }

  componentDidMount() {
    // HTTP request using Axios
  }

  next() {
    // Next item
    this.slider.slickNext();
  }
  previous() {
    // previous item
    this.slider.slickPrev();
  }

  orderItem = id => {
    //Send Get request from Oredr Items
    //Take the response to Checkout comp withe the details

    if (id > this.state.order.length - 1) {
      this.errorMessage = "Order exceed the array";
      console.log(this.errorMessage);
    } else {
      let x = this.state.order[id];
      // this.setState({ order: x })
      this.props.history.push({ pathname: "/checkout" }, x);
    }
  };

  render() {
    const errorMessage = "";

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: current => this.setState({ activeSlide: current })
    };

    return (
      <div>
        <Main />
        <div className="row">
          <div className="mx-auto col-md-8">
            <h4 className="h4">{errorMessage}</h4>
            <Slider {...settings}>
              <div>
                <img className="mx-auto" src={menu1} alt="menu 1" />
              </div>
              <div>
                <img className="mx-auto" src={menu2} alt="menu 2" />
              </div>
              <div>
                <img className="mx-auto" src={menu3} alt="menu 3" />
              </div>
              <div>
                <img
                  className="mx-auto"
                  src={"https://fakeimg.pl/350x200/?text=Item 4"}
                  alt="Item 4"
                />
              </div>
            </Slider>
          </div>
        </div>

        <div className="row">
          <div className="mx-auto my-5">
            <p />
            <button
              onClick={this.orderItem.bind(this, this.state.activeSlide)}
              className="btn btn-outline-secondary mx-auto"
            >
              Oredr Item
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
