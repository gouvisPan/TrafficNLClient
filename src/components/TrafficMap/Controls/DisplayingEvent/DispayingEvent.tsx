import React from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import Radar from "../../../../model/Radar";
import Roadwork from "../../../../model/Roadwork";
import TrafficJam from "../../../../model/TrafficJam";
import "./DisplayingEvent.scss";
import * as typeCheck from "../../../../model/TypeCheck";
import { selectEventById } from "../../../../store/selectors/selectEventById";

const colorRed = "#FF5252";
const colorOrange = "#FBC02D";
const colorGreen = "#8BC34A";

const DispayingEvent: React.FC<{}> = (props) => {
  const event = useAppSelector((state) =>
    selectEventById(state.data.data!, state.ui.displayingEvent!)
  );
  let cssColor = colorRed;

  if (event?.delay) {
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
          <h2>Info</h2>
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
          {event.reason && <span>Cause:</span>}
          {event.reason && (
            <span className="displaying-jam__info ">{event.reason}</span>
          )}
          {event.label && <span>Extra info:</span>}
          {event.label && (
            <span className="displaying-jam__info ">{event.label}</span>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DispayingEvent;
