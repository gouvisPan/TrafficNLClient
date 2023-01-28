import React from "react";
import "./Controls.scss";

import { useAppSelector } from "../../../hooks/hooks";

import SliderButton from "./SliderButton";
import ShowHideControls from "./ShowHideControls/ShowHideControls";
import OpacitySlider from "./CirclesControls/OpacitySlider/OpacitySlider";
import HistoryPicker from "./HistorPicker/HistoryPicker";
import CirclesControls from "./CirclesControls/CirclesControls";
import InfoWindow from "./InfoWindow/InfoWindow";
import DispayingEvent from "./DisplayingEvent/DispayingEvent";

const Controls = () => {
  const isSliderOpen = useAppSelector((state) => state.ui.isSliderOpen);

  return (
    <div className={`controls-container ${!isSliderOpen && "closed"}`}>
      <div
        className={`controls-container__content ${!isSliderOpen && "move-cl"}`}
      >
        <ShowHideControls />
        <CirclesControls />
        <HistoryPicker />
        <DispayingEvent />
        <InfoWindow />
      </div>
      <SliderButton />
    </div>
  );
};

export default Controls;
