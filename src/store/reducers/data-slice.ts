import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTraffic } from "../actions/data-actions";

interface dataSliceState {
  isLoading: boolean;
  isSuccess: boolean;
  error: null | string;
  data: any;
}

const initialState: dataSliceState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  data: null,
};

const dataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTraffic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTraffic.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getTraffic.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
