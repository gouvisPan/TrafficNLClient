import { Marker } from "@react-google-maps/api";
import React from "react";
import camera from "../../../../assets/speed-camera.png";
import { useAppDispatch } from "../../../../hooks/hooks";
import Radar from "../../../../model/Radar";
import { uiActions } from "../../../../store/reducers/ui-slice";

const RadarMarker: React.FC<{ radar: Radar; clusterer: any }> = (props) => {
  const dispatch = useAppDispatch();
  const icon = {
    url: camera,
    scaledSize: new google.maps.Size(30, 30),
  };
  return (
    <Marker
      position={props.radar.fromLoc}
      options={{
        icon,
      }}
      clusterer={props.clusterer}
      onClick={() => dispatch(uiActions.setDisplayingEvent(props.radar.id))}
    />
  );
};
export default RadarMarker;
