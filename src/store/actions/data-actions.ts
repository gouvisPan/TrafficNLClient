import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/trafficRetriveService";
import { normalizeApiEvents } from "../../helpers/normalizeApiEvents";
import { dataActions } from "../reducers/data-slice";

export const getLatestTraffic = createAsyncThunk(
  "events/getLatest",
  async (_: void, thunkApi) => {
    try {
      thunkApi.dispatch(dataActions.clearErrorState());

      const response = await api.fetchLatestTraffic();
      const storeEvents = normalizeApiEvents(response?.data.data.data);

      return storeEvents;
    } catch (error: any) {
      console.log(error);
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getSpecificTraffic = createAsyncThunk(
  "evets/getSpecific",
  async (time: number, thunkApi) => {
    thunkApi.dispatch(dataActions.clearErrorState());
    try {
      const response = await api.fetchSpecificTraffic(time);
      const storeEvents = normalizeApiEvents(response?.data.data.data);
      return storeEvents;
    } catch (error: any) {
      console.log(error);
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

//I created two seperate Routes, one for current and one for specific events, to demonstrate a multiroute
//environment. The same results can be achieved by using the "getSpecificTraffic" functions with the current
//date-time as an argument
