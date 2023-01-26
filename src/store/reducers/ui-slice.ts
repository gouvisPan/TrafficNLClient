import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isSliderOpen: true,
    isRoadworkEnabled: true,
    isSpeedcamEnabled: false,
    isCongestionEnabled: true,
    opacityValue: 10,
  },
  reducers: {
    toggleSlider(state) {
      state.isSliderOpen = !state.isSliderOpen;
    },
    toggleRoadwork(state) {
      state.isRoadworkEnabled = !state.isRoadworkEnabled;
    },
    toggleSpeedCam(state) {
      state.isSpeedcamEnabled = !state.isSpeedcamEnabled;
    },
    toggleCongestion(state) {
      state.isCongestionEnabled = !state.isCongestionEnabled;
    },
    setOpacityValue(state, action) {
      state.opacityValue = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
