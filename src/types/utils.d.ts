import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
};

type NumberCardProps = {
  title: string;
  value: string;
};
