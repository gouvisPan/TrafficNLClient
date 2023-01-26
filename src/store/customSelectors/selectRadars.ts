import Radar from "../../model/Radar";

export const selectRadars = (data: any) => {
  const radarList: Radar[] = [];

  data.forEach((road: any) => {
    let tmpRadar: Radar;

    road.segments.forEach((segment: any) => {
      if (segment.radars) {
        segment.radars.forEach((radar: any) => {
          tmpRadar = {
            id: radar.id,
            from: radar.from,
            to: radar.to,
            fromLoc: radar.fromLoc,
            toLoc: radar.toLoc,
          };

          radarList.push(tmpRadar);
        });
      }
    });
  });

  return radarList;
};
