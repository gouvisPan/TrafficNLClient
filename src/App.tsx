import React, { useEffect } from "react";
import TrafficMap from "./components/TrafficMap/TrafficMap";

import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { getTraffic } from "./store/actions/data-actions";

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.data.isLoading);
  const isSuccess = useAppSelector((state) => state.data.isSuccess);

  useEffect(() => {
    dispatch(getTraffic());

    return () => {};
  }, [dispatch]);

  return <div>{isSuccess && !isLoading ? <TrafficMap /> : ""}</div>;
}

export default App;
