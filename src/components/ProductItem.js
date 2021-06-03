import React from "react";
import Ratings from "./Ratings";

function ProductItem({ product }) {
  return (
    <div className="card">
      <a href={`./product/${product._id}`}>
        <img className="medium" src={product.image} alt="product" />
      </a>
      <div className="card-body">
        <a href={`./product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
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
