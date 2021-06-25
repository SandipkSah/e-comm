import React, { Component } from "react";
import { ButtonContainer } from "./styling";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./context";

export default class details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            img,
            info,
            price,
            company,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto  text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model:{title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    company : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3">
                    some info about product;
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <Link to="/">
                    <ButtonContainer> Back to home</ButtonContainer>
                  </Link>  
                  <ButtonContainer cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    {inCart ? "in Cart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
