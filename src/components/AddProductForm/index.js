import React from "react";
import { userListing } from "../../constant";
import "./style/style.css";

class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addBookForm: {
        bookName: "",
        bookAuthor: "",
        bookReleaseYear: "",
        bookCover: "",
        bookDetailsUrl: "",
        bookUploadedBy: "",
        bookRank: 0,
      },
      addBookErrors: {
        bookName: false,
        bookAuthor: false,
        bookReleaseYear: false,
        bookCover: false,
        bookDetailsUrl: false,
        bookUploadedBy: false,
        submitError: true,
      },
    };
  }

  onInputChange = (event) => {
    const { addBookForm, addBookErrors } = this.state;
    if (event.target.name === "bookName") {
      addBookForm.bookName = event.target.value;
      addBookErrors.bookName = false;
    } else if (event.target.name === "bookAuthor") {
      addBookForm.bookAuthor = event.target.value;
      addBookErrors.bookAuthor = false;
    } else if (event.target.name === "bookReleaseYear") {
      addBookForm.bookReleaseYear = event.target.value;
      addBookErrors.bookReleaseYear = false;
    } else if (event.target.name === "bookCover") {
      addBookForm.bookCover = event.target.value;
      addBookErrors.bookCover = false;
    } else if (event.target.name === "bookAbout") {
      addBookForm.bookDetailsUrl = event.target.value;
      addBookErrors.bookDetailsUrl = false;
    } else if (event.target.name === "bookUploadedBy") {
      addBookForm.bookUploadedBy = event.target.value;
      addBookErrors.bookUploadedBy = false;
    } else {
      //
    }
    this.setState({
      addBookForm,
      addBookErrors,
    });
  };

  validateForm = () => {
    const { addBookForm, addBookErrors } = this.state;
    if (addBookForm.bookName === "") {
      addBookErrors.bookName = true;
      addBookErrors.submitError = true;
    } else if (addBookForm.bookAuthor === "") {
      addBookErrors.bookAuthor = true;
      addBookErrors.submitError = true;
    } else if (addBookForm.bookReleaseYear === "") {
      addBookErrors.bookReleaseYear = true;
      addBookErrors.submitError = true;
    } else if (addBookForm.bookCover === "") {
      addBookErrors.bookCover = true;
      addBookErrors.submitError = true;
    } else if (addBookForm.bookDetailsUrl === "") {
      addBookErrors.bookDetailsUrl = true;
      addBookErrors.submitError = true;
    } else if (addBookForm.bookUploadedBy === "") {
      addBookErrors.bookUploadedBy = true;
      addBookErrors.submitError = true;
    } else {
      addBookErrors.submitError = false;
    }
    this.setState({
      addBookErrors,
    });
  };

  submitForm = () => {
    const { addBookErrors, addBookForm } = this.state;
    const { getFormData } = this.props;
    if (
      addBookErrors.bookName ||
      addBookErrors.bookAuthor ||
      addBookErrors.bookReleaseYear ||
      addBookErrors.bookCover ||
      addBookErrors.bookDetailsUrl ||
      addBookErrors.bookUploadedBy
    ) {
      addBookErrors.submitError = true;
    } else {
      addBookErrors.submitError = false;
      addBookForm.bookRank = addBookForm.bookRank + 1;
      getFormData(addBookForm);
    }
    this.setState({
      addBookErrors,
    });
  };

  render() {
    const { addBookForm, addBookErrors } = this.state;
    return (
      <div className="add-product-form">
        <div className="form-title">Add new book</div>
        <div className="form-row">
          <div className="form-column">
            <input
              type="text"
              name="bookName"
              value={addBookForm.bookName}
              placeholder="Book name"
              onChange={this.onInputChange}
              onBlur={this.validateForm}
              className={`${addBookErrors.bookName ? "error" : ""}`}
            />
          </div>
          <div className="form-column">
            <input
              type="text"
              name="bookAuthor"
              value={addBookForm.bookAuthor}
              placeholder="Book author"
              onChange={this.onInputChange}
              onBlur={this.validateForm}
              className={`${addBookErrors.bookAuthor ? "error" : ""}`}
            />
          </div>
          <div className="form-column">
            <input
              type="text"
              name="bookReleaseYear"
              value={addBookForm.bookReleaseYear}
              placeholder="Boot release year"
              onChange={this.onInputChange}
              onBlur={this.validateForm}
              className={`${addBookErrors.bookReleaseYear ? "error" : ""}`}
            />
          </div>
          <div className="form-column">
            <input
              type="text"
              name="bookCover"
              value={addBookForm.bookCover}
              placeholder="Book cover"
              onChange={this.onInputChange}
              onBlur={this.validateForm}
              className={`${addBookErrors.bookCover ? "error" : ""}`}
            />
          </div>
          <div className="form-column">
            <input
              type="text"
              name="bookAbout"
              value={addBookForm.bookDetailsUrl}
              placeholder="More about the book"
              onChange={this.onInputChange}
              onBlur={this.validateForm}
              className={`${addBookErrors.bookDetailsUrl ? "error" : ""}`}
            />
          </div>
          <div className="form-column">
            <select
              name="bookUploadedBy"
              value={addBookForm.bookUploadedBy}
              onChange={this.onInputChange}
              onBlur={this.validateForm}
              className={`${addBookErrors.bookUploadedBy ? "error" : ""}`}
            >
              <option value="0">Select user who uploaded the book.</option>
              {userListing &&
                userListing.length > 0 &&
                userListing.map((user) => {
                  return (
                    <option key={Math.random()} value={user.value}>
                      {user.value}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="bt-wrap">
            <button
              disabled={addBookErrors.submitError}
              onClick={() => this.submitForm()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProductForm;
