import React from "react";
import Roadwork from "../../../../model/Roadwork";
import roadwork from "../../../../assets/roadwork.png";
import { Circle, Marker, MarkerClusterer } from "@react-google-maps/api";
import TrafficJam from "../../../../model/TrafficJam";
import { calculateCenter } from "../../../../helpers/calculateCenter";
import warning from "../../../../assets/warning.png";
import { calculateDistance } from "../../../../helpers/calculateDistance";
import start from "../../../../assets/sFrorStart.png";
import finish from "../../../../assets/fForFinish.png";
import { useAppSelector } from "../../../../hooks/hooks";

const CongestionCircle: React.FC<{ jam: TrafficJam }> = (props) => {
  const { opacityValue } = useAppSelector((state) => state.ui);

  const defaultOptions = {
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    fillOpacity: opacityValue / 100,
  };
  const lowCongestion = {
    ...defaultOptions,
    zIndex: 3,
    strokeColor: "#8BC34A",
    fillColor: "#8BC34A",
  };
  const middleCongestion = {
    ...defaultOptions,
    zIndex: 2,
    strokeColor: "#FBC02D",
    fillColor: "#FBC02D",
  };
  const highCongestion = {
    ...defaultOptions,
    zIndex: 1,
    strokeColor: "#FF5252",
    fillColor: "#FF5252",
  };

  const closedRoad = {
    ...defaultOptions,
    zIndex: 1,
    strokeColor: "#444",
    fillColor: "#444",
  };

  const center = calculateCenter(
    { lat: props.jam.fromLoc.lat, lng: props.jam.fromLoc.lon },
    { lat: props.jam.toLoc.lat, lng: props.jam.toLoc.lon }
  );
  const radius =
    calculateDistance(
      { lat: props.jam.fromLoc.lat, lng: props.jam.fromLoc.lon },
      { lat: props.jam.toLoc.lat, lng: props.jam.toLoc.lon }
    ) / 2;

  let options = props.jam.delay > 800 && highCongestion;
  if (props.jam.delay < 500) {
    options = lowCongestion;
  } else {
    options = middleCongestion;
  }

  if (!props.jam.delay) options = closedRoad;

  const iconS = {
    url: start,
    scaledSize: new google.maps.Size(15, 15),
  };
  const iconF = {
    url: finish,
    scaledSize: new google.maps.Size(15, 15),
  };

  return (
    <>
      <Circle center={center} radius={radius} options={options} />;
      <Marker
        position={{ lat: props.jam.fromLoc.lat, lng: props.jam.fromLoc.lon }}
        options={{
          icon: iconS,
        }}
      />
      <Marker
        position={{ lat: props.jam.toLoc.lat, lng: props.jam.toLoc.lon }}
        options={{
          icon: iconF,
        }}
      />
    </>
  );
};

export default CongestionCircle;
