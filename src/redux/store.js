// store.js
import { configureStore } from "@reduxjs/toolkit";
//import cartReducer from './cartSlice';
//import productReducer from "./reducers/productSlice";

// cart: cartReducer,
//products: productReducer,
export const storeReducer = {
  //   admin: adminSlice,
  //   auth: authSlice,
  //  cart: cartSlice,
  //  order: orderSlice,
  //    orders: ordersSlice,
//    product: productSlice,
  // products: productsSlice,
  //   user: userSlice,
};

export const store = configureStore({
  reducer: storeReducer,
});
console.log(store.getState());
