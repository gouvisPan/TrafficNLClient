export const isJam = (event: any) => {
  return event.delay !== undefined;
};
export const isRoadwork = (event: any) => {
  return event.reason !== undefined;
};
