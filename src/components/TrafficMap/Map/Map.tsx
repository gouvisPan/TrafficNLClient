import React, { useCallback, useMemo, useRef } from "react";
import { GoogleMap, MarkerClusterer } from "@react-google-maps/api";
import "./Map.scss";
import { useAppSelector } from "../../../hooks/hooks";
import { selectRoadworks } from "../../../store/customSelectors/selectRoadworks";
import RoadWorkMarker from "./CustomMarkers/RoadWorkMarker";
import { selectRadars } from "../../../store/customSelectors/selectRadars";
import RadarMarker from "./CustomMarkers/RadarMarker";
import { selectJams } from "../../../store/customSelectors/selectJams";
import CongestionMarker from "./CustomMarkers/CongestionMarker";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const Map = () => {
  const roadworks = useAppSelector((state) => selectRoadworks(state.data.data));
  const radars = useAppSelector((state) => selectRadars(state.data.data));
  const jams = useAppSelector((state) => selectJams(state.data.data));
  const { isRoadworkEnabled } = useAppSelector((state) => state.ui);
  const { isSpeedcamEnabled } = useAppSelector((state) => state.ui);
  const { isCongestionEnabled } = useAppSelector((state) => state.ui);

  const mapRef = useRef<GoogleMap>();
  const defaultCenter = useMemo<LatLngLiteral>(
    () => ({ lat: 51.645253, lng: 3.938875 }),
    []
  );
  const mapOptions = useMemo<MapOptions>(
    () => ({
      mapId: "3354ee672c5eeb83",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  return (
    <div className="map">
      <GoogleMap
        zoom={9}
        center={defaultCenter}
        mapContainerClassName="map-con"
        options={mapOptions}
        onLoad={onLoad}
      >
        {isRoadworkEnabled ? (
          <MarkerClusterer>
            {(clusterer) => (
              <>
                {roadworks.map((work) => (
                  <RoadWorkMarker
                    work={work}
                    key={work.id}
                    clusterer={clusterer}
                  />
                ))}
              </>
            )}
          </MarkerClusterer>
        ) : (
          ""
        )}

        {isSpeedcamEnabled ? (
          <MarkerClusterer>
            {(clusterer) => (
              <>
                {radars.map((radar) => (
                  <RadarMarker
                    radar={radar}
                    key={radar.id}
                    clusterer={clusterer}
                  />
                ))}
                {}
              </>
            )}
          </MarkerClusterer>
        ) : (
          ""
        )}

        {isCongestionEnabled
          ? jams.map((jam) => <CongestionMarker jam={jam} key={jam.id} />)
          : ""}
      </GoogleMap>
    </div>
  );
};

export default Map;
