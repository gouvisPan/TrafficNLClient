type LatLngLiteral = google.maps.LatLngLiteral;

export const calculateCenter = (
  start: LatLngLiteral,
  finish: LatLngLiteral
) => {
  const lat1 = (start.lat * Math.PI) / 180;
  const lng1 = (start.lng * Math.PI) / 180;

  const lat2 = (finish.lat * Math.PI) / 180;
  const lng2 = (finish.lng * Math.PI) / 180;

  const lat = (lat1 + lat2) / 2;
  const lon = (lng1 + lng2) / 2;

  var newLat = (lat * 180) / Math.PI;
  var newLng = (lon * 180) / Math.PI;

  return { lat: newLat, lng: newLng };
};
