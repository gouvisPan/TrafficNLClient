import StoreEvent from "../../model/StoreEvent";
import DispayedEvent from "../../model/DisplayedEvent";

export const selectEventById = (events: StoreEvent[], id: number) => {
  let myEvent: StoreEvent | undefined;
  let displayedEvent: DispayedEvent | undefined = undefined;

  if (events) {
    myEvent = events.find((e) => e.id === id);
  }
  if (myEvent) {
    displayedEvent = {
      from: myEvent.from,
      to: myEvent.to,
      road: myEvent.road,
      delay: myEvent.delay,
      distance: myEvent.distance,
      reason: myEvent.reason,
      label: myEvent.label,
    };
  }

  return displayedEvent;
};
