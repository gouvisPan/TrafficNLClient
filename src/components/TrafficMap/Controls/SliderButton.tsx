import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { uiActions } from "../../../store/reducers/ui-slice";
import "./Controls.scss";

const SliderButton = () => {
  const dispatch = useAppDispatch();
  const isSliderOpen = useAppSelector((state) => state.ui.isSliderOpen);

  const slideClickHandler = () => {
    dispatch(uiActions.toggleSlider());
  };

  return (
    <div
      className={`slider ${!isSliderOpen && "move-r"}`}
      onClick={slideClickHandler}
    >
      {isSliderOpen ? (
        <BiLeftArrow className="slider__icon" />
      ) : (
        <BiRightArrow className="slider__icon" />
      )}
    </div>
  );
};

export default SliderButton;
