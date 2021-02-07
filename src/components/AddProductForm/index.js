import React from "react";
import "./style/style.css";

class AddProductForm extends React.Component {
  render() {
    return (
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
    );
  }
}

export default AddProductForm;
