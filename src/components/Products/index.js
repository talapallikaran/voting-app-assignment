import React from "react";
import "./style/style.css";
import { PRODUCT_PLACEHOLDER } from "../../assets/images";
class Products extends React.Component {
  render() {
    return (
      <ul className="product-listing">
            <li className="product">
              <div className="product-inner">
                <div className="product-thumb">
                  <img src={PRODUCT_PLACEHOLDER.default} alt="" />
                </div>
                <div className="product-content">
                  <div className="product-vote">
                    <span className="product-position"></span>
                    <span className="product-position-number">1</span>
                  </div>
                  <div className="product-name">Product Name</div>
                  <div className="product-meta">
                    <span className="product-categories">Test</span> /
                    <span className="product-year">2018</span>
                  </div>
                  <div className="product-uploader">
                    Submitted by
                    <span className="submitter-name"> User 1</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
    );
  }
}

export default Products;
