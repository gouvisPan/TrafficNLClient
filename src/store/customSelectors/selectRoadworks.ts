import Roadwork from "../../model/Roadwork";

export const selectRoadworks = (data: any) => {
  const roadworkList: Roadwork[] = [];

  data.forEach((road: any) => {
    let tmpRoadwork: Roadwork;

    road.segments.forEach((segment: any) => {
      if (segment.roadworks) {
        segment.roadworks.forEach((roadwork: any) => {
          tmpRoadwork = {
            id: roadwork.id,
            from: roadwork.from,
            to: roadwork.to,
            fromLoc: roadwork.fromLoc,
            toLoc: roadwork.toLoc,
            label: roadwork.label,
            reason: roadwork.reason,
          };

          roadworkList.push(tmpRoadwork);
        });
      }
    });
  });

  return roadworkList;
};
