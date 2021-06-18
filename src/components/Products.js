import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import data from "../data";
import ProductItem from "./ProductItem";
import MessageBox from "./MessageBox";
import LoadingBox from "./LoadingBox";
import { listProducts } from "../actions/productActions";

function Products() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     setLoading(true);
    //     const { data } = await axios.get("/api/products");
    //     setLoading(false);
    //     setProducts(data);
    //   } catch (err) {
    //     setError(err.message);
    //     setLoading(false);
    //   }
    // };
    // fetchData();
    dispatch(listProducts());
  }, [dispatch]);
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
