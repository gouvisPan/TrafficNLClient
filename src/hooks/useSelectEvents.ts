import React from "react";
import { selectJams } from "../store/selectors/selectJams";
import { selectRadars } from "../store/selectors/selectRadars";
import { selectRoadworks } from "../store/selectors/selectRoadworks";
import { useAppSelector } from "./hooks";

const useSelectEvents = () => {
  const roadworks = useAppSelector((state) => selectRoadworks(state.data.data));
  const radars = useAppSelector((state) => selectRadars(state.data.data));
  const jams = useAppSelector((state) => selectJams(state.data.data));

  return { roadworks, radars, jams };
};

export default useSelectEvents;
