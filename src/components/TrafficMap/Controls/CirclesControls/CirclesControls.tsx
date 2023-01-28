import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { uiActions } from "../../../../store/reducers/ui-slice";
import OpacitySlider from "../OpacitySlider/OpacitySlider";
import "./CirclesControls.scss";
const CirclesControls = () => {
  const { areCirclesEnabled } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  return (
    <div className="circles-controls-container">
      <div
        className="circles-controls-container__button"
        onClick={() => dispatch(uiActions.toggleCircles())}
      >
        <span>{areCirclesEnabled ? "Disable" : "Enable"} Circles</span>
      </div>
      {areCirclesEnabled ? <OpacitySlider /> : ""}
    </div>
  );
};

export default CirclesControls;
