import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
};

type NumberCardProps = {
  title: string;
  value: string;
  unit?: string;
};

type Order = "ASC" | "DESC";

type CustomError = {
  status: number;
  error: string;
  message: string;
  code: string;
  timestamp: string;
  path: string;
};

type SavedStation = {
  id: number;
  stationId: numnber;
  synced: boolean;
};
