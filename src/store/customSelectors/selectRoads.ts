export const selectRoads = (data: any) => {
  const roadList: string[] = [];

  data.forEach((e: any) => {
    roadList.push(e.road);
  });

  return roadList;
};
