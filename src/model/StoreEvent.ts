type LatLngLiteral = google.maps.LatLngLiteral;

export default interface StoreEvent {
  id: number;
  road: string;
  type: string;
  from: string;
  to: string;
  fromLoc: LatLngLiteral;
  toLoc: LatLngLiteral;
  delay?: number;
  distance?: number;
  reason?: string;
  label?: string;
}
