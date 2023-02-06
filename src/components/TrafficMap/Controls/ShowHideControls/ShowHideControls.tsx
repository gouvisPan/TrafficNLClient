import React from "react";
import roadWork from "../../../../assets/roadwork.png";
import congestion from "../../../../assets/warning.png";
import speedCam from "../../../../assets/speed-camera.png";
import "./ShowHideControls.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { uiActions } from "../../../../store/reducers/ui-slice";

const ShowHideControls = () => {
  const { isRoadworkEnabled, isSpeedcamEnabled, isCongestionEnabled } =
    useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  return (
    <div className="toggle-container">
      <div
        className={`toggle-container__roadwork ${
          !isRoadworkEnabled && "grey-effect"
        }`}
        onClick={() => dispatch(uiActions.toggleRoadwork())}
      >
        <img src={roadWork} alt="roadwork-icon"></img>
      </div>
      <div
        className={`toggle-container__congestion ${
          !isCongestionEnabled && "grey-effect"
        }`}
        onClick={() => dispatch(uiActions.toggleCongestion())}
      >
        <img src={congestion} alt="congention-icon"></img>
      </div>
      <div
        className={`toggle-container__speedcam ${
          !isSpeedcamEnabled && "grey-effect"
        }`}
        onClick={() => dispatch(uiActions.toggleSpeedCam())}
      >
        <img src={speedCam} alt="speed-camera-icon"></img>
      </div>
    </div>
  );
};

export default ShowHideControls;
