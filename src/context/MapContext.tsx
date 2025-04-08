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
};

const MapContext = createContext<MapContextType | undefined>(undefined);

export function MapProvider({ children }: { children: ReactNode }) {
  const [coordinate, setCoordinate] = useState<MapContextType["coordinate"]>({
    lat: null,
    lng: null,
  });
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);

  return (
    <MapContext
      value={{ coordinate, setCoordinate, selectedStation, setSelectedStation }}
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
