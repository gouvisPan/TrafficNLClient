export default interface TrafficEvent {
  id: number;
  from: string;
  to: string;
  fromLoc: { lat: number; lng: number };
  toLoc: { lat: number; lng: number };
}
