import React from "react";
// import ProductItem from "./ProductItem";
import data from "../data";
import ProductItem from "./ProductItem";

function Products() {
  return (
    <main>
      <div>
        <div className="row center">
          {data.products.map((product) => {
            return <ProductItem key={product._id} product={product} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Products;
