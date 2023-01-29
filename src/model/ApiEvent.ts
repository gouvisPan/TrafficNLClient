export default interface ApiEvent {
  eventId: number;
  road: string;
  eventType: string;
  from: string;
  to: string;
  fromLocLat: number;
  fromLocLon: number;
  toLocLat: number;
  toLocLon: number;
  delay?: number;
  distance?: number;
  reason?: string;
  label?: string;
  polyLine?: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}
