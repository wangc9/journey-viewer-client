type StationsQueryInput = {
  take?: number;
  skip?: number;
  id?: "ASC" | "DESC";
  name?: "ASC" | "DESC";
  address?: "ASC" | "DESC";
  x?: "ASC" | "DESC";
  y?: "ASC" | "DESC";
  search?: string;
};

type Station = {
  id: number;
  stationName?: string;
  stationAddress?: string;
  coordinateX?: string;
  coordinateY?: string;
};

type StationsList = Array<Station>;
