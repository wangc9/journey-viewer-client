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
  journeyCloseRef,
}: {
  triggerRef: RefObject<HTMLButtonElement | null>;
  journeyCloseRef: RefObject<HTMLButtonElement | null>;
}) {
  const [icon, setIcon] = useState<L.Icon>();
  const [departureIcon, setDepartureIcon] = useState<L.Icon>();
  const [destinationIcon, setDestinationIcon] = useState<L.Icon>();
  const {
    setCoordinate,
    setSelectedStation,
    setSelectedDepartureStation,
    setSelectedDestinationStation,
    selectedDepartureStation,
    selectedDestinationStation,
  } = useMapContext();
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
          url={`https://cdn.digitransit.fi/map/v3/hsl-map/{z}/{x}/{y}@2x.png?digitransit-subscription-key=${process.env.NEXT_PUBLIC_DIGITRANSIT_KEY}`}
        />
        <MapEvents
          setIcon={setIcon}
          setDepartureIcon={setDepartureIcon}
          setDestinationIcon={setDestinationIcon}
        />
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
                  setSelectedDepartureStation(null);
                  setSelectedDestinationStation(null);
                  journeyCloseRef.current?.click();
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
        {selectedDepartureStation && (
          <Marker
            key="departure-station"
            position={[
              parseFloat(selectedDepartureStation.coordinateY as string),
              parseFloat(selectedDepartureStation.coordinateX as string),
            ]}
            icon={departureIcon}
            eventHandlers={{
              click: () => {
                setCoordinate({
                  lat: selectedDepartureStation.coordinateY as string,
                  lng: selectedDepartureStation.coordinateX as string,
                });
                setSelectedStation(selectedDepartureStation);
                journeyCloseRef.current?.click();
                triggerRef.current?.click();
              },
            }}
          />
        )}
        {selectedDestinationStation && (
          <Marker
            key="destination-station"
            position={[
              parseFloat(selectedDestinationStation.coordinateY as string),
              parseFloat(selectedDestinationStation.coordinateX as string),
            ]}
            icon={destinationIcon}
            eventHandlers={{
              click: () => {
                setCoordinate({
                  lat: selectedDestinationStation.coordinateY as string,
                  lng: selectedDestinationStation.coordinateX as string,
                });
                setSelectedStation(selectedDestinationStation);
                journeyCloseRef.current?.click();
                triggerRef.current?.click();
              },
            }}
          />
        )}
      </MapContainer>
    </div>
  );
}
