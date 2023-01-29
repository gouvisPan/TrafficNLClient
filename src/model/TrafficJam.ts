import TrafficEvent from "./TrafficEvent";

export default interface TrafficJam extends TrafficEvent {
  polyLine: string;
  road: string;
  delay: number;
  distance: number;
  label: string;
}
