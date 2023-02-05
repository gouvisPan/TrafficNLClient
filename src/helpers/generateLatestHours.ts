export const generateLatestHours = () => {
  const timesArray: number[] = [];

  for (let i = 1; i < 48; i++) {
    const tmpDate = Date.now() - i * 30 * 60 * 1000;
    timesArray.push(tmpDate);
  }

  return timesArray;
};
