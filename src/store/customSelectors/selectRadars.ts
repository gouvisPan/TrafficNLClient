import Radar from "../../model/Radar";

export const selectRadars = (events: any) => {
  const radarList: Radar[] = [];

  if (events) {
    events.forEach((event: any) => {
      let tmpRadar: Radar;

      if (event.type === "radar") {
        tmpRadar = {
          id: event.id,
          from: event.from,
          to: event.to,
          fromLoc: event.fromLoc,
          toLoc: event.toLoc,
        };

        // removing dublicates that may occure in testing due to frequent server restarts
        if (!radarList.some((radar) => radar.id === tmpRadar.id)) {
          radarList.push(tmpRadar);
        }
        // radarList.push(tmpRadar);
      }
    });
  }
  return radarList;
};
