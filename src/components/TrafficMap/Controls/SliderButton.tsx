import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { uiActions } from "../../../store/reducers/ui-slice";
import "./Controls.scss";

const SliderButton = () => {
  const dispatch = useAppDispatch();
  const isSliderOpen = useAppSelector((state) => state.ui.isSliderOpen);

  return (
    <div className="slider" onClick={() => dispatch(uiActions.toggleSlider())}>
      {isSliderOpen ? (
        <BsFillArrowLeftCircleFill className="slider__icon" />
      ) : (
        <BsFillArrowRightCircleFill className="slider__icon" />
      )}
    </div>
  );
};

export default SliderButton;
