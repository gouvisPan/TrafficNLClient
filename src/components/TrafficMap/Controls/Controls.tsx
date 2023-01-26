import React from "react";
import "./Controls.scss";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { uiActions } from "../../../store/reducers/ui-slice";
import SliderButton from "./SliderButton";
import ShowHideControls from "./ShowHideControls/ShowHideControls";
import OpacitySlider from "./OpacitySlider/OpacitySlider";

const Controls = () => {
  const isSliderOpen = useAppSelector((state) => state.ui.isSliderOpen);

  return (
    <div className={`controls-container ${!isSliderOpen && "closed"}`}>
      <ShowHideControls />
      <OpacitySlider />
      <SliderButton />
    </div>
  );
};

export default Controls;
