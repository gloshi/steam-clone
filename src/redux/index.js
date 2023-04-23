import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import gameSlice from './data/dataSlice'
import reviewSlice from "./review/reviewSlice";
import paramsSlice from "./params/paramsSlice";


export const store = configureStore({
  reducer: {
    cart: cartSlice,
    game: gameSlice,
    review: reviewSlice,
    params: paramsSlice,
  },
});
