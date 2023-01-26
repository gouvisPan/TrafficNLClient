import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { selectJams } from "../../store/customSelectors/selectJams";
import { selectRadars } from "../../store/customSelectors/selectRadars";
import { selectRoads } from "../../store/customSelectors/selectRoads";
import { selectRoadworks } from "../../store/customSelectors/selectRoadworks";

const TrafficTable = () => {
  const roads = useAppSelector((state) => selectRoads(state.data.data));
  // const jams = useAppSelector((state) => selectJams(state.data.data));
  // const rads = useAppSelector((state) => selectRadars(state.data.data));
  const roadworks = useAppSelector((state) => selectRoadworks(state.data.data));

  console.log(roadworks);
  return <div className="table"></div>;
};

export default TrafficTable;
