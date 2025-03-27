"use client";

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
};

const MapContext = createContext<MapContextType | undefined>(undefined);

export function MapProvider({ children }: { children: ReactNode }) {
  const [coordinate, setCoordinate] = useState<MapContextType["coordinate"]>({
    lat: null,
    lng: null,
  });

  return (
    <MapContext value={{ coordinate, setCoordinate }}>{children}</MapContext>
  );
}

export function useMapContext() {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error("useMapContext must be used within a MapProvider");
  }
  return context;
}
