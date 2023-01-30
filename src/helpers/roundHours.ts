export const roundHours = (date: number) => {
  let minutesString = new Date(date).toTimeString().slice(3, 5);
  let hoursString = new Date(date).toTimeString().slice(0, 2);
  let minutesInt = parseInt(minutesString);
  let hoursInt = parseInt(hoursString);

  hoursInt = minutesInt > 45 ? hoursInt + 1 : hoursInt;
  minutesString = minutesInt >= 45 || minutesInt <= 15 ? "00" : "30";

  if (hoursInt === 24) hoursInt = 0;
  if (hoursInt === -1) hoursInt = 23;

  hoursString =
    hoursInt.toString().length === 1 ? `0${hoursInt}` : hoursInt.toString();

  return hoursString + ":" + minutesString;
};
