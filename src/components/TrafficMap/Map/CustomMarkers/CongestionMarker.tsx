import { Marker } from "@react-google-maps/api";
import React from "react";
import { useAppDispatch } from "../../../../hooks/hooks";
import TrafficJam from "../../../../model/TrafficJam";
import { uiActions } from "../../../../store/reducers/ui-slice";
import congestionIcon from "../../../../assets/warning.png";

const CongestionMarker: React.FC<{ jam: TrafficJam; clusterer: any }> = (
  props
) => {
  const dispatch = useAppDispatch();

  const iconS = {
    url: congestionIcon,
    scaledSize: new google.maps.Size(18, 18),
  };

  return (
    <Marker
      position={props.jam.fromLoc}
      onClick={() => dispatch(uiActions.setDisplayingEvent(props.jam.id))}
      clusterer={props.clusterer}
      options={{
        icon: iconS,
        clickable: true,
      }}
    />
  );
};

export default CongestionMarker;
