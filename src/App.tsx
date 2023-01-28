import React, { useEffect } from "react";
import Notification from "./components/StoreStateOutput/Notification/Notification";
import Spinner from "./components/StoreStateOutput/Spinner/Spinner";
import Home from "./components/TrafficMap/Home";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { getLatestTraffic } from "./store/actions/data-actions";

function App() {
  const { isLoading } = useAppSelector((state) => state.data);
  const { error } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLatestTraffic());
  }, [dispatch]);

  return (
    <div>
      {error ? <Notification message={error} type={error} /> : ""}
      {isLoading ? <Spinner /> : ""}
      <Home />
    </div>
  );
}

export default App;
