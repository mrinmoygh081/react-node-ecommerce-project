import React, { useEffect, useState } from "react";
import axios from "axios";
// import data from "../data";
import ProductItem from "./ProductItem";
import MessageBox from "./MessageBox";
import LoadingBox from "./LoadingBox";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <main>
      <div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox>{error}</MessageBox>
        ) : (
          <div className="row center">
            {products.map((product) => {
              return <ProductItem key={product._id} product={product} />;
            })}
          </div>
        )}
      </div>
    </main>
  );
}

export default Products;
