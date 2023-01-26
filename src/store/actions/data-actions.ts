import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/trafficRetriveService";

export const getTraffic = createAsyncThunk(
  "skills/create",
  async (_: void, thunkApi) => {
    try {
      const response = await api.fetchTraffic();
      console.log(response?.data.roads);
      return response?.data.roads;
    } catch (error: any) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
