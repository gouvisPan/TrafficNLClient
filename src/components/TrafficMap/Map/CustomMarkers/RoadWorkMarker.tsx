import React from "react";
import Roadwork from "../../../../model/Roadwork";
import roadwork from "../../../../assets/roadwork.png";
import { Marker } from "@react-google-maps/api";

const RoadWorkMarker: React.FC<{ work: Roadwork; clusterer: any }> = (
  props
) => {
  const icon = {
    url: roadwork,
    scaledSize: new google.maps.Size(30, 30),
  };

  return (
    <Marker
      position={props.work.fromLoc}
      animation={google.maps.Animation.DROP}
      options={{
        icon,
      }}
      clusterer={props.clusterer}
    />
  );
};

export default RoadWorkMarker;
