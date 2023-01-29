import React, { useState } from "react";
import Roadwork from "../../../../model/Roadwork";
import roadwork from "../../../../assets/roadwork.png";
import {
  Circle,
  Marker,
  DirectionsRenderer,
  Polyline,
} from "@react-google-maps/api";
import TrafficJam from "../../../../model/TrafficJam";
import { calculateCenter } from "../../../../helpers/calculateCenter";
import { calculateDistance } from "../../../../helpers/calculateDistance";
import congestionIcon from "../../../../assets/warning.png";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { uiActions } from "../../../../store/reducers/ui-slice";
import { decode } from "@googlemaps/polyline-codec";
import { decodePolylinePath } from "../../../../helpers/decodePolylinePath";
import { normalize } from "path";

type DirectionsResult = google.maps.DirectionsResult;

const colorRed = "#FF5252";
const colorOrange = "#FBC02D";
const colorGreen = "#8BC34A";
const colorBlack = "#444";

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
  } else if (props.jam.delay < 1100) {
    options = highCongestion;
    routeColor = colorRed;
  }

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

      {/* {directions && (
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
      )} */}
    </>
  );
};

export default CongestionCircle;
