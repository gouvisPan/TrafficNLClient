import { Marker } from "@react-google-maps/api";
import React from "react";
import camera from "../../../../assets/speed-camera.png";
import Radar from "../../../../model/Radar";

const RadarMarker: React.FC<{ radar: Radar; clusterer: any }> = (props) => {
  const icon = {
    url: camera,
    scaledSize: new google.maps.Size(30, 30),
  };
  return (
    <Marker
      position={{ lat: props.radar.fromLoc.lat, lng: props.radar.fromLoc.lon }}
      options={{
        icon,
      }}
      clusterer={props.clusterer}
      //   animation={google.maps.Animation.BOUNCE}
    />
  );
};
export default RadarMarker;
