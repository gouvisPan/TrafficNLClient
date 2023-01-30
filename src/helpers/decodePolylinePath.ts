import { decode } from "@googlemaps/polyline-codec";

export const decodePolylinePath = (polyString: string) => {
  const path = decode(polyString, 5);

  const normalizedPath = path.map((pair) => {
    return { lat: pair[0], lng: pair[1] };
  });

  return normalizedPath;
};
