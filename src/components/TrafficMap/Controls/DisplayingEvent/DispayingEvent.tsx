import React from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import Radar from "../../../../model/Radar";
import Roadwork from "../../../../model/Roadwork";
import TrafficJam from "../../../../model/TrafficJam";
import "./DisplayingEvent.scss";

const colorRed = "#FF5252";
const colorOrange = "#FBC02D";
const colorGreen = "#8BC34A";

const DispayingEvent = () => {
  const event: TrafficJam | undefined = useAppSelector(
    (state) => state.ui.displayingEvent
  );
  let cssColor = colorRed;

  if (event) {
    if (event!.delay < 500) {
      cssColor = colorGreen;
    } else if (event!.delay < 800) {
      cssColor = colorOrange;
    }
  }
  return (
    <>
      {event ? (
        <div className="displaying-jam">
          <h2>Route info</h2>
          <span>From: </span>
          <span className="displaying-jam__info">{event.from}</span>
          <span>To: </span>
          <span className="displaying-jam__info">{event.to}</span>

          {event.delay && <span>Aprox. delay:</span>}
          {event.delay && (
            <span
              className={`displaying-jam__info`}
              style={{ color: cssColor }}
            >
              {event.delay / 60}min
            </span>
          )}
          {event.distance && <span>Distance: </span>}
          {event.distance && (
            <span className="displaying-jam__info ">{event.distance}m</span>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DispayingEvent;
