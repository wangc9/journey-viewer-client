"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import MapEvents from "./MapEvents";
import { RefObject, useState } from "react";
import { stationsOptions } from "@/utils/queries/stations";
import { useSuspenseQuery } from "@tanstack/react-query";
import L from "leaflet";
import { useMapContext } from "@/context/MapContext";

export default function Map({
  triggerRef,
}: {
  triggerRef: RefObject<HTMLButtonElement | null>;
}) {
  const [icon, setIcon] = useState<L.Icon>();
  const { setCoordinate, setSelectedStation } = useMapContext();
  const queryOptions = stationsOptions({
    skip: 0,
  });
  const { data: stations } = useSuspenseQuery(queryOptions);
  return (
    <div className="h-full">
      <MapContainer
        center={[60.171033, 24.941497]}
        zoom={20}
        style={{ width: "100%", height: "93vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.digitransit.fi/en/developers/apis/6-terms-of-use/">Digitransit</a> contributors'
          url="https://cdn.digitransit.fi/map/v3/hsl-map/{z}/{x}/{y}@2x.png?digitransit-subscription-key=e272a3da0ede40f0bfe2b95083b33298"
        />
        <MapEvents setIcon={setIcon} />
        {Array.isArray(stations) &&
          icon !== undefined &&
          stations.map((station) => (
            <Marker
              key={station.id}
              position={[
                parseFloat(station.coordinateY as string),
                parseFloat(station.coordinateX as string),
              ]}
              icon={icon}
              eventHandlers={{
                click: () => {
                  setCoordinate({
                    lat: station.coordinateY as string,
                    lng: station.coordinateX as string,
                  });
                  setSelectedStation(station);
                  triggerRef.current?.click();
                },
              }}
            />
          ))}
      </MapContainer>
    </div>
  );
}
