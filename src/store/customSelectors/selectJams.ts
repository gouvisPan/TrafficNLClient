import TrafficJam from "../../model/TrafficJam";

export const selectJams = (data: any) => {
  const jamList: TrafficJam[] = [];

  data.forEach((road: any) => {
    let tmpJam: TrafficJam;

    road.segments.forEach((segment: any) => {
      //add radars and other types of marks

      if (segment.jams) {
        segment.jams.forEach((jam: any) => {
          tmpJam = {
            id: jam.id,
            road: jam.road,
            delay: jam.delay,
            distance: jam.distance,
            from: jam.from,
            to: jam.to,
            fromLoc: jam.fromLoc,
            toLoc: jam.toLoc,
            label: jam.label,
          };

          jamList.push(tmpJam);
        });
      }
    });
  });

  return jamList;
};
