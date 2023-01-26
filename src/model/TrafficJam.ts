import TrafficEvent from "./TrafficEvent";

export default interface TrafficJam extends TrafficEvent {
  road: string;
  delay: number;
  distance: number;
  label: string;
}
