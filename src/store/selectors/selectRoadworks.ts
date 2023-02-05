import Roadwork from "../../model/Roadwork";
import StoreEvent from "../../model/StoreEvent";

export const selectRoadworks = (events: StoreEvent[] | undefined) => {
  const roadworkList: Roadwork[] = [];

  if (events) {
    events.forEach((event: any) => {
      let tmpWork: Roadwork;

      if (event.type === "roadwork") {
        tmpWork = {
          id: event.id,
          from: event.from,
          to: event.to,
          fromLoc: event.fromLoc,
          toLoc: event.toLoc,
          label: event.label,
          reason: event.reason,
        };

        //removing dublicates because the api returns some dublicate roadwork and clustering doesnt work as intended
        if (
          !roadworkList.some(
            (roadwork) =>
              roadwork.fromLoc.lat === tmpWork.fromLoc.lat &&
              roadwork.fromLoc.lng === tmpWork.fromLoc.lng
          )
        ) {
          roadworkList.push(tmpWork);
        }
      }
    });
  }
  return roadworkList;
};
