import ApiEvent from "../../model/ApiEvent";
import StoreEvent from "../../model/StoreEvent";
import TrafficJam from "../../model/TrafficJam";

export const selectJams = (events: StoreEvent[] | undefined) => {
  const jamList: TrafficJam[] = [];

  if (events)
    events.forEach((event: any) => {
      let tmpJam: TrafficJam;

      if (event.type === "congestion") {
        tmpJam = {
          id: event.id,
          road: event.road,
          delay: event.delay,
          polyLine: event.polyLine,
          distance: event.distance,
          from: event.from,
          to: event.to,
          fromLoc: event.fromLoc,
          toLoc: event.toLoc,
          label: event.label,
        };

        // removing dublicates that may occure in testing due to frequent server restarts
        if (!jamList.some((jam) => jam.id === tmpJam.id)) {
          jamList.push(tmpJam);
        }
        // jamList.push(tmpJam);
      }
    });

  return jamList;
};
