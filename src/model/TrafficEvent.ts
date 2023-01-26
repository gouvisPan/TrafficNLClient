export default interface TrafficEvent {
  id: number;
  from: string;
  to: string;
  fromLoc: { lat: number; lon: number };
  toLoc: { lat: number; lon: number };
}
