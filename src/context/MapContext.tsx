"use client";

import { Journey } from "@/types/journeys";
import { Station } from "@/types/stations";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type MapContextType = {
  coordinate: {
    lat: string | null;
    lng: string | null;
  };
  setCoordinate: Dispatch<SetStateAction<MapContextType["coordinate"]>>;
  selectedStation: Station | null;
  setSelectedStation: Dispatch<SetStateAction<Station | null>>;
  selectedDepartureStation: Station | null;
  setSelectedDepartureStation: Dispatch<SetStateAction<Station | null>>;
  selectedDestinationStation: Station | null;
  setSelectedDestinationStation: Dispatch<SetStateAction<Station | null>>;
  selectedJourney: Journey | null;
  setSelectedJourney: Dispatch<SetStateAction<Journey | null>>;
  id: string | undefined;
  setId: Dispatch<SetStateAction<string | undefined>>;
  name: string | undefined;
  setName: Dispatch<SetStateAction<string | undefined>>;
  address: string | undefined;
  setAddress: Dispatch<SetStateAction<string | undefined>>;
  x: string | undefined;
  setX: Dispatch<SetStateAction<string | undefined>>;
  y: string | undefined;
  setY: Dispatch<SetStateAction<string | undefined>>;
  dTime: string | undefined;
  setDTime: Dispatch<SetStateAction<string | undefined>>;
  rTime: string | undefined;
  setRTime: Dispatch<SetStateAction<string | undefined>>;
  distance: string | undefined;
  setDistance: Dispatch<SetStateAction<string | undefined>>;
  duration: string | undefined;
  setDuration: Dispatch<SetStateAction<string | undefined>>;
};

const MapContext = createContext<MapContextType | undefined>(undefined);

export function MapProvider({ children }: { children: ReactNode }) {
  const [coordinate, setCoordinate] = useState<MapContextType["coordinate"]>({
    lat: null,
    lng: null,
  });
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [selectedDepartureStation, setSelectedDepartureStation] =
    useState<Station | null>(null);
  const [selectedDestinationStation, setSelectedDestinationStation] =
    useState<Station | null>(null);
  const [selectedJourney, setSelectedJourney] = useState<Journey | null>(null);
  const [id, setId] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [address, setAddress] = useState<string | undefined>();
  const [x, setX] = useState<string | undefined>();
  const [y, setY] = useState<string | undefined>();
  const [dTime, setDTime] = useState<string | undefined>();
  const [rTime, setRTime] = useState<string | undefined>();
  const [distance, setDistance] = useState<string | undefined>();
  const [duration, setDuration] = useState<string | undefined>();

  return (
    <MapContext
      value={{
        coordinate,
        setCoordinate,
        selectedStation,
        setSelectedStation,
        selectedDepartureStation,
        setSelectedDepartureStation,
        selectedDestinationStation,
        setSelectedDestinationStation,
        selectedJourney,
        setSelectedJourney,
        id,
        setId,
        name,
        setName,
        address,
        setAddress,
        x,
        setX,
        y,
        setY,
        dTime,
        setDTime,
        rTime,
        setRTime,
        distance,
        setDistance,
        duration,
        setDuration,
      }}
    >
      {children}
    </MapContext>
  );
}

export function useMapContext() {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error("useMapContext must be used within a MapProvider");
  }
  return context;
}
