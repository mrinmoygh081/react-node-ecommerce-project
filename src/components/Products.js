import React from "react";
// import ProductItem from "./ProductItem";
import data from "../data";
import Ratings from "./Ratings";

function Products() {
  return (
    <main>
      <div>
        <div className="row center">
          {data.products.map((product) => {
            return (
            <div key={product._id} className="card">
              <a href={`./product/${product._id}`}>
                <img className="medium" src={product.image} alt="product" />
              </a>
              <div className="card-body">
                <a href={`./product/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
                <Ratings />
                <div className="price">&#8377;{product.price}</div>
              </div>
            </div>);
          })}
        </div>
      </div>
    </main>
  );
}

export default Products;
