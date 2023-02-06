import React from "react";
import { Circle, Polyline } from "@react-google-maps/api";
import TrafficJam from "../../../../model/TrafficJam";
import { calculateDistance } from "../../../../helpers/calculateDistance";
import { useAppSelector } from "../../../../hooks/hooks";
import { decodePolylinePath } from "../../../../helpers/decodePolylinePath";
import { calculateCenter } from "../../../../helpers/calculateCenter";

const colorRed = "#FF5252";
const colorOrange = "#FBC02D";
const colorGreen = "#8BC34A";
const colorBlack = "#444";

const CongestionDrawings: React.FC<{ jam: TrafficJam }> = (props) => {
  const { opacityValue, areCirclesEnabled } = useAppSelector(
    (state) => state.ui
  );

  const defaultOptions = {
    strokeOpacity: 0.5,
    strokeWeight: 2,
    clickable: false,
    zIndex: 2,
    draggable: false,
    editable: false,
    visible: true,
    fillOpacity: opacityValue / 100,
  };
  const lowCongestion = {
    ...defaultOptions,
    strokeColor: colorGreen,
    fillColor: colorGreen,
  };
  const middleCongestion = {
    ...defaultOptions,
    strokeColor: colorOrange,
    fillColor: colorOrange,
  };
  const highCongestion = {
    ...defaultOptions,
    strokeColor: colorRed,
    fillColor: colorRed,
  };

  const closedRoad = {
    ...defaultOptions,
    strokeColor: colorBlack,
    fillColor: colorBlack,
  };

  const center = calculateCenter(props.jam.fromLoc, props.jam.toLoc);

  const radius = calculateDistance(props.jam.fromLoc, props.jam.toLoc) / 2;
  let routeColor = colorBlack;
  let options = closedRoad;

  if (props.jam.delay < 500) {
    options = lowCongestion;
    routeColor = colorGreen;
  } else if (props.jam.delay < 800) {
    options = middleCongestion;
    routeColor = colorOrange;
  } else if (props.jam.delay) {
    options = highCongestion;
    routeColor = colorRed;
  }

  return (
    <>
      {areCirclesEnabled && (
        <Circle center={center} radius={radius} options={options} />
      )}
      {props.jam.polyLine && (
        <Polyline
          path={decodePolylinePath(props.jam.polyLine)}
          options={{
            geodesic: true,
            strokeColor: routeColor,
            strokeOpacity: 1,
            strokeWeight: 5,
          }}
        />
      )}
    </>
  );
};

export default CongestionDrawings;
