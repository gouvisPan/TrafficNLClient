import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import StoreEvent from "../../model/StoreEvent";
import { getLatestTraffic, getSpecificTraffic } from "../actions/data-actions";

interface dataSliceState {
  isLoading: boolean;
  isSuccess: boolean;
  error: null | string;
  data: StoreEvent[] | undefined;
}

const initialState: dataSliceState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  data: undefined,
};

const dataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearErrorState(state) {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getLatestTraffic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getLatestTraffic.fulfilled,
        (state, action: PayloadAction<StoreEvent[] | undefined>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.data = action.payload;
        }
      )
      .addCase(
        getLatestTraffic.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addCase(getSpecificTraffic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getSpecificTraffic.fulfilled,
        (state, action: PayloadAction<StoreEvent[] | undefined>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.data = action.payload;
        }
      )
      .addCase(
        getSpecificTraffic.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          console.log("action.payload");
          state.error = action.payload;
        }
      );
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
