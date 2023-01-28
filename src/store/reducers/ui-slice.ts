import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import StoreEvent from "../../model/StoreEvent";
import TrafficEvent from "../../model/TrafficEvent";
import TrafficJam from "../../model/TrafficJam";

interface uiSliceState {
  isSliderOpen: boolean;
  isRoadworkEnabled: boolean;
  isSpeedcamEnabled: boolean;
  isCongestionEnabled: boolean;
  areCirclesEnabled: boolean;
  opacityValue: number;
  displayingEvent: undefined | number;
}

const initialState: uiSliceState = {
  isSliderOpen: true,
  isRoadworkEnabled: true,
  isSpeedcamEnabled: false,
  isCongestionEnabled: true,
  areCirclesEnabled: false,
  opacityValue: 5,
  displayingEvent: undefined,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
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
    toggleCircles(state) {
      state.areCirclesEnabled = !state.areCirclesEnabled;
    },
    setDisplayingEvent(state, action: PayloadAction<number | undefined>) {
      state.displayingEvent = action.payload;
    },
    setOpacityValue(state, action: PayloadAction<number>) {
      state.opacityValue = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
