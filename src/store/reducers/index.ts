import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";

import dataSlice from "./data-slice";
import uiSlice from "./ui-slice";

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
