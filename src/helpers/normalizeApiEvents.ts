import ApiEvent from "../model/ApiEvent";
import StoreEvent from "../model/StoreEvent";

export const normalizeApiEvents = (apiEvents: ApiEvent[]) => {
  const storeEvents: StoreEvent[] = [];

  apiEvents.forEach((apiEvent) => {
    storeEvents.push({
      id: apiEvent.eventId,
      road: apiEvent.road,
      type: apiEvent.eventType,
      from: apiEvent.from,
      to: apiEvent.to,
      fromLoc: { lat: apiEvent.fromLocLat, lng: apiEvent.fromLocLon },
      toLoc: { lat: apiEvent.toLocLat, lng: apiEvent.toLocLon },
      polyLine: apiEvent.polyLine || undefined,
      delay: apiEvent.delay || undefined,
      distance: apiEvent.distance || undefined,
      reason: apiEvent.reason || undefined,
      label: apiEvent.label || undefined,
    });
  });

  return storeEvents;
};
