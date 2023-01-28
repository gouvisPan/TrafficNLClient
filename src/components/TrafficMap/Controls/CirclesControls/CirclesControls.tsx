import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { uiActions } from "../../../../store/reducers/ui-slice";
import OpacitySlider from "./OpacitySlider/OpacitySlider";
import "./CirclesControls.scss";
const CirclesControls = () => {
  const { areCirclesEnabled } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  return (
    <div className="circles-controls-container">
      <div className="circles-controls-container__button-outter">
        <div
          className={`circles-controls-container__button-inner ${
            areCirclesEnabled ? "slide-on" : ""
          }`}
          onClick={() => dispatch(uiActions.toggleCircles())}
        >
          <span>Areas {areCirclesEnabled ? "Enabled" : "Disabled"}</span>
        </div>
      </div>
      {areCirclesEnabled ? <OpacitySlider /> : ""}
    </div>
  );
};

export default CirclesControls;
