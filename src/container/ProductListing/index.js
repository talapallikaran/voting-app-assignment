import React, { Component } from "react";
import "./style/style.css";

import AddProductForm from "../../components/AddProductForm";
import Products from "../../components/Products";

class ProductListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookListing: [],
    };
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="vote-outer">
          <Products productData={this.state.bookListing} />
          <AddProductForm
            getFormData={(recievedData) => {
              this.setState((prevState) => {
                return {
                  bookListing: [...prevState.bookListing, recievedData],
                };
              });
            }}
          />
        </div>
      </div>
    );
  }
}

export default ProductListing;
