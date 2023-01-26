type LatLngLiteral = google.maps.LatLngLiteral;

export const calculateCenter = (
  start: LatLngLiteral,
  finish: LatLngLiteral
) => {
  let X = 0.0;
  let Y = 0.0;
  let Z = 0.0;

  const lat1 = (start.lat * Math.PI) / 180;
  const lng1 = (start.lng * Math.PI) / 180;

  const lat2 = (finish.lat * Math.PI) / 180;
  const lng2 = (finish.lng * Math.PI) / 180;

  const a1 = Math.cos(lat1) * Math.cos(lng1);
  const b1 = Math.cos(lat1) * Math.sin(lng1);
  const c1 = Math.sin(lat1);

  const a2 = Math.cos(lat2) * Math.cos(lng2);
  const b2 = Math.cos(lat2) * Math.sin(lng2);
  const c2 = Math.sin(lat2);

  X = (a1 + a2) / 2;
  Y = (b1 + b2) / 2;
  Z = (c1 + c2) / 2;

  var lon = Math.atan2(Y, X);
  var hyp = Math.sqrt(X * X + Y * Y);
  var lat = Math.atan2(Z, hyp);

  var newLat = (lat * 180) / Math.PI;
  var newLng = (lon * 180) / Math.PI;

  return { lat: newLat, lng: newLng };
};
