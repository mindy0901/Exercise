import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const rootReducer = combineReducers({
      cartSlice,
});



