import React, { useState } from "react";
import Roadwork from "../../../../model/Roadwork";
import roadwork from "../../../../assets/roadwork.png";
import { Circle, Marker, DirectionsRenderer } from "@react-google-maps/api";
import TrafficJam from "../../../../model/TrafficJam";
import { calculateCenter } from "../../../../helpers/calculateCenter";
import { calculateDistance } from "../../../../helpers/calculateDistance";
import congestionIcon from "../../../../assets/warning.png";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { uiActions } from "../../../../store/reducers/ui-slice";

type DirectionsResult = google.maps.DirectionsResult;

const colorRed = "#FF5252";
const colorOrange = "#FBC02D";
const colorGreen = "#8BC34A";

const CongestionCircle: React.FC<{ jam: TrafficJam }> = (props) => {
  const dispatch = useAppDispatch();
  const { opacityValue, areCirclesEnabled } = useAppSelector(
    (state) => state.ui
  );
  const [directions, setDirections] = useState<DirectionsResult>();

  const defaultOptions = {
    strokeOpacity: 0.5,
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
    strokeColor: colorGreen,
    fillColor: colorGreen,
  };
  const middleCongestion = {
    ...defaultOptions,
    zIndex: 2,
    strokeColor: colorOrange,
    fillColor: colorOrange,
  };
  const highCongestion = {
    ...defaultOptions,
    zIndex: 1,
    strokeColor: colorRed,
    fillColor: colorRed,
  };

  const closedRoad = {
    ...defaultOptions,
    zIndex: 1,
    strokeColor: "#444",
    fillColor: "#444",
  };

  const center = calculateCenter(props.jam.fromLoc, props.jam.toLoc);
  const radius = calculateDistance(props.jam.fromLoc, props.jam.toLoc) / 2;

  let options = highCongestion;
  let routeColor = colorRed;

  if (props.jam.delay < 500) {
    options = lowCongestion;
    routeColor = colorGreen;
  } else if (props.jam.delay < 800) {
    options = middleCongestion;
    routeColor = colorOrange;
  }

  if (!props.jam.delay) options = closedRoad;

  const iconS = {
    url: congestionIcon,
    scaledSize: new google.maps.Size(15, 15),
  };

  const markerClickHandler = () => {
    dispatch(uiActions.setDisplayingEvent(props.jam.id));
    if (props.jam.label === "closed") return;

    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: props.jam.fromLoc,
        destination: props.jam.toLoc,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  };

  return (
    <>
      {areCirclesEnabled && (
        <Circle center={center} radius={radius} options={options} />
      )}
      <Marker
        position={props.jam.fromLoc}
        onClick={markerClickHandler}
        options={{
          icon: iconS,
          clickable: true,
        }}
      />

      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            suppressMarkers: true,
            polylineOptions: {
              zIndex: 50,
              strokeColor: routeColor,
              strokeWeight: 5,
            },
          }}
        />
      )}
    </>
  );
};

export default CongestionCircle;
