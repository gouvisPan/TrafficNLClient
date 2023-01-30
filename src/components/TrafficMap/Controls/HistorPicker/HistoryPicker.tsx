import React, { useEffect, useState } from "react";
import { roundHours } from "../../../../helpers/roundHours";
import { useAppDispatch } from "../../../../hooks/hooks";
import { getSpecificTraffic } from "../../../../store/actions/data-actions";
import "./HistoryPicker.scss";

const HistoryPicker = () => {
  const [menuState, setMenuState] = useState(Date.now());
  const timesArray: number[] = [];
  const dispatch = useAppDispatch();

  useEffect(() => {}, [menuState]);
  const changeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setMenuState(parseInt(e.currentTarget.value));
    dispatch(getSpecificTraffic(parseInt(e.currentTarget.value)));
  };
  //a basic output of the last day devided in 48 half-hour options is being implemented
  //just to showcase the history functionallity. In a production app a custom date picker
  //would be a better option

  for (let i = 1; i < 48; i++) {
    const tmpDate = Date.now() - i * 30 * 60 * 1000;
    timesArray.push(tmpDate);
  }

  return (
    <div className="history-picker-container">
      <label>
        Select time:
        <select
          name="selectHistory"
          onChange={changeHandler}
          defaultValue={roundHours(menuState)}
        >
          <option value={Date.now()}>Current</option>
          {timesArray.map((date) => (
            <option value={`${date}`}>{roundHours(date)}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default HistoryPicker;
