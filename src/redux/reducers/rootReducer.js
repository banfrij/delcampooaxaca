// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './productSlice'; // adjust the path as needed

const rootReducer = combineReducers({
  product: productReducer,
  // other reducers go here
});

export default rootReducer;