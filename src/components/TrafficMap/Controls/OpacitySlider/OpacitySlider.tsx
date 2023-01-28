import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { uiActions } from "../../../../store/reducers/ui-slice";
import "./OpacitySlider.scss";

const OpacitySlider = () => {
  const dispatch = useAppDispatch();
  const { opacityValue } = useAppSelector((state) => state.ui);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(uiActions.setOpacityValue(parseInt(e.currentTarget.value)));
  };
  return (
    <div className="opacity-container">
      <label>Visibility:</label>
      <input
        type="range"
        min="0"
        max="100"
        value={opacityValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default OpacitySlider;
