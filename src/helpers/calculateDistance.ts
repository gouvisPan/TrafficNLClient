type LatLngLiteral = google.maps.LatLngLiteral;

export const calculateDistance = (
  start: LatLngLiteral,
  finish: LatLngLiteral
) => {
  const R = 6371e3; // metres
  const f1 = (start.lat * Math.PI) / 180; // φ, λ in radians
  const f2 = (finish.lat * Math.PI) / 180;
  const df = ((finish.lat - start.lat) * Math.PI) / 180;
  const dl = ((finish.lng - start.lng) * Math.PI) / 180;

  const a =
    Math.sin(df / 2) * Math.sin(df / 2) +
    Math.cos(f1) * Math.cos(f2) * Math.sin(dl / 2) * Math.sin(dl / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};
