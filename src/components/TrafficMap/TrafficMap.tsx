import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import Controls from "./Controls/Controls";
import Map from "./Map/Map";
import "./TrafficMap.scss";
import { useAppSelector } from "../../hooks/hooks";
import { selectRoadworks } from "../../store/customSelectors/selectRoadworks";
const TrafficMap = () => {
  const roadworks = useAppSelector((state) => selectRoadworks(state.data.data));
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="map-container">
      <Controls />
      <Map />
    </div>
  );
};

export default TrafficMap;
