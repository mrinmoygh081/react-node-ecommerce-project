import React from "react";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";

function ProductItem({ product }) {
  return (
    <div className="card">
      <Link to={`./product/${product._id}`}>
        <img className="medium" src={product.image} alt="product" />
      </Link>
      <div className="card-body">
        <Link to={`./product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Ratings rating={product.rating} numReviews={product.numReviews} />
        <div className="price">&#8377;{product.price}</div>
      </div>
    </div>
  );
}

ProductItem.defaultProps = {
  title: "White Full Sleeves T-shirt",
  price: "300",
};

export default ProductItem;
