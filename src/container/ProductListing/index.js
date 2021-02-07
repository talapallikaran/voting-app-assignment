import React from "react";
import "./style/style.css";

import AddProductForm from "../../components/AddProductForm";
import Products from "../../components/Products";

class ProductListing extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="vote-outer">
          <Products />
          <AddProductForm />
        </div>
      </div>
    );
  }
}

export default ProductListing;
