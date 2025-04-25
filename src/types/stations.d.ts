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

type DestinationsQueryInput = {
  take?: number;
  skip?: number;
  id: number;
  startDate?: string;
  endDate?: string;
};

type StationWithCount = {
  id: number;
  station_name?: string;
  station_address?: string;
  coordinate_x?: string;
  coordinate_y?: string;
  journey_count: number;
};

type StationJourneyCountByMonth = {
  month: Date;
  station_id: string;
  departure_count: number;
  arrival_count: number;
};
