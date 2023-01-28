import { createAsyncThunk } from "@reduxjs/toolkit";
import { normalize } from "path";
import * as api from "../../api/trafficRetriveService";
import { normalizeApiEvents } from "../../helpers/normalizeApiEvents";
import { dataActions } from "../reducers/data-slice";

export const getLatestTraffic = createAsyncThunk(
  "events/getLatest",
  async (_: void, thunkApi) => {
    try {
      thunkApi.dispatch(dataActions.clearErrorState());

      const response = await api.fetchLatestTraffic();
      console.log(response?.data.data.data);
      const storeEvents = normalizeApiEvents(response?.data.data.data);

      return storeEvents;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getSpecificTraffic = createAsyncThunk(
  "evets/getSpecific",
  async (time: number, thunkApi) => {
    thunkApi.dispatch(dataActions.clearErrorState());
    try {
      const response = await api.fetchSpecificTraffic(time);
      console.log(response?.data.data.data);
      const storeEvents = normalizeApiEvents(response?.data.data.data);

      return storeEvents;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
