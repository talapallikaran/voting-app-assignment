import React from "react";
import "./style/style.css";
import { PRODUCT_PLACEHOLDER } from "../../assets/images";
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { productData } = this.props;
    if (
      prevProps.productData !== productData &&
      productData &&
      productData.length > 0
    ) {
      this.setState({
        bookData: productData,
      });
    }
  }

  updatePosition = (index) => {
    const { bookData } = this.state;
    if (index !== 0) {
      const filteredData =
        bookData &&
        bookData.length > 0 &&
        bookData.filter((item, i) => i !== index);
      const filteredIndividual =
        bookData &&
        bookData.length > 0 &&
        bookData.filter((item, i) => i === index);
      filteredData.splice(index - 1, 0, filteredIndividual[0]);
      this.setState({
        bookData: filteredData,
      });
    }
  };

  render() {
    const { bookData } = this.state;
    const bookListing =
      bookData && bookData.length > 0 ? (
        bookData.map((book, index) => {
          return (
            <li className="product" key={index}>
              <div
                className="product-inner"
                onClick={() => this.updatePosition(index)}
              >
                <div className="product-thumb">
                  <img src={book.bookCover || PRODUCT_PLACEHOLDER} alt="" />
                </div>
                <div className="product-content">
                  <div className="product-vote">
                    <span className="product-position"></span>
                    <span className="product-position-number">{index}</span>
                  </div>
                  <div className="product-name">{book.bookName}</div>
                  <div className="product-meta">
                    <span className="product-categories">
                      {book.bookAuthor}
                    </span>{" "}
                    /
                    <span className="product-year">{book.bookReleaseYear}</span>
                  </div>
                  <div className="product-uploader">
                    Submitted by
                    <span className="submitter-name">
                      {book.bookUploadedBy}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          );
        })
      ) : (
        <span className="no-records">
          No records found, please add from below
        </span>
      );

    return <ul className="product-listing">{bookListing}</ul>;
  }
}

export default Products;
