import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer, NavWrapper } from "./styling";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="nav  navbar-dark px-sm-5 align-items-center">
        <Link to="/">
          <img src="img/nav_image.jpg" alt="store-img" className="navbar-brand" width="45px" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Buy/Sell
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span class="mr-2">
              <i class="fas fa-cart-plus"/>
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
