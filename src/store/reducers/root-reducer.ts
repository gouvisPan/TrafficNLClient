import { combineReducers } from "@reduxjs/toolkit";
import dataSlice from "./data-slice";
import uiSlice from "./ui-slice";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  data: dataSlice.reducer,
  ui: uiSlice.reducer,
});

export default rootReducer;
