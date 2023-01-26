import TrafficEvent from "./TrafficEvent";

export default interface Roadwork extends TrafficEvent {
  reason: string;
  label: string;
}
