import { applyMiddleware, compose, createStore, combineReducers } from "redux";
// import data from "./data";
import thunk from "redux-thunk";
import { cartReducer } from "./reducer/cartReducer";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducer/productReducer";

const initialState = {
  // cart: {
  //   cartItems: localStorage.getItem("cartItems")
  //     ? JSON.parse(localStorage.getItem("cartItems"))
  //     : [],
  // },
};
// const reducer = (state, action) => {
//   return { products: data.products };
// };
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
