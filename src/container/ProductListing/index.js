import React from "react";
import "./style/style.css";
import { PRODUCT_PLACEHOLDER } from "../../assets/images";

class ProductListing extends React.Component {
  render() {
    console.log(PRODUCT_PLACEHOLDER)
    return (
      <div className="main-wrapper">
        <div className="vote-outer">
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
          <div className="add-product-form">
            <div className="form-title">Add new book</div>
            <div className="form-row">
              <div className="form-column">
                <input type="text" placeholder="Book name" />
              </div>
              <div className="form-column">
                <input type="text" placeholder="Book author" />
              </div>
              <div className="form-column">
                <input type="text" placeholder="Boot release year" />
              </div>
              <div className="form-column">
                <input type="text" placeholder="Book cover" />
              </div>
              <div className="form-column">
                <input type="text" placeholder="More about the book" />
              </div>
              <div className="form-column">
                <select>
                  <option value="0">Select user who uploaded the book.</option>
                  <option value="1">User 1</option>
                  <option value="2">User 2</option>
                  <option value="3">User 3</option>
                </select>
              </div>
              <div className="bt-wrap">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListing;
