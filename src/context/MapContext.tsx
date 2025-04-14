"use client";

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
};

const MapContext = createContext<MapContextType | undefined>(undefined);

export function MapProvider({ children }: { children: ReactNode }) {
  const [coordinate, setCoordinate] = useState<MapContextType["coordinate"]>({
    lat: null,
    lng: null,
  });
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [id, setId] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [address, setAddress] = useState<string | undefined>();
  const [x, setX] = useState<string | undefined>();
  const [y, setY] = useState<string | undefined>();
  const [dTime, setDTime] = useState<string | undefined>();
  const [rTime, setRTime] = useState<string | undefined>();

  return (
    <MapContext
      value={{
        coordinate,
        setCoordinate,
        selectedStation,
        setSelectedStation,
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
