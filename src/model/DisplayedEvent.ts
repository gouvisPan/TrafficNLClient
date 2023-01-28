export default interface DispayedEvent {
  from: string;
  to: string;
  road: string;
  delay: number | undefined;
  distance: number | undefined;
  reason: string | undefined;
  label: string | undefined;
}
