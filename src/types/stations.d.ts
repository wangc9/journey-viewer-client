import { RefObject } from "react";

type StationsQueryInput = {
  take?: number;
  skip?: number;
  id?: "ASC" | "DESC";
  name?: "ASC" | "DESC";
  address?: "ASC" | "DESC";
  x?: "ASC" | "DESC";
  y?: "ASC" | "DESC";
  search?: string;
  triggerRef: RefObject<HTMLButtonElement | null>;
};

type Station = {
  id: number;
  stationName?: string;
  stationAddress?: string;
  coordinateX?: string;
  coordinateY?: string;
};

type StationsList = Array<Station>;

type StationCardProps = {
  stationId: number;
};
