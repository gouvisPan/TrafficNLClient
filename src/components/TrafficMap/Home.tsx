import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import Controls from "./Controls/Controls";
import Map from "./Map/Map";
import "./Home.scss";
import { useAppSelector } from "../../hooks/hooks";
import Spinner from "../StoreStateOutput/Spinner/Spinner";

const Home = () => {
  const { isSuccess } = useAppSelector((state) => state.data);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <Spinner />;

  return (
    <div className="map-container">
      <Controls />
      {isSuccess && <Map />}
    </div>
  );
};

export default Home;
