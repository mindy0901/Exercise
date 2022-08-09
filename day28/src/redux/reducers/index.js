import { combineReducers } from "@reduxjs/toolkit";
import postSlice from "./postSlice";

export const rootReducer = combineReducers({
      postSlice,
});



