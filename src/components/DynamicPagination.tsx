import { PaginationProps } from "@/types/utils";
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextButton,
  PaginationPreviousButton,
} from "./ui/pagination";
import { useEffect, useState } from "react";

export default function DynamicPagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) {
  const [number1, setNumber1] = useState<number>(2);
  const [number2, setNumber2] = useState<number>(3);
  const [number3, setNumber3] = useState<number>(4);

  useEffect(() => {
    switch (currentPage) {
      case 1:
      case 2:
      case 3:
        setNumber1(2);
        setNumber2(3);
        setNumber3(4);
        break;

      case totalPages:
      case totalPages - 1:
      case totalPages - 2:
        setNumber1(totalPages - 3);
        setNumber2(totalPages - 2);
        setNumber3(totalPages - 1);
        break;

      default:
        setNumber1(currentPage - 1);
        setNumber2(currentPage);
        setNumber3(currentPage + 1);
        break;
    }
  }, [currentPage, totalPages]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPreviousButton
            onClick={() => {
              setCurrentPage((state) => state - 1);
            }}
            disabled={currentPage === 1}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationButton
            onClick={() => {
              setCurrentPage(() => 1);
            }}
            isActive={currentPage === 1}
          >
            1
          </PaginationButton>
        </PaginationItem>
        <PaginationItem className={`${currentPage >= 4 ? "" : "hidden"}`}>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationButton
            onClick={() => {
              setCurrentPage(() => number1);
            }}
            isActive={currentPage === number1}
          >
            {number1}
          </PaginationButton>
        </PaginationItem>
        <PaginationItem>
          <PaginationButton
            onClick={() => {
              setCurrentPage(() => number2);
            }}
            isActive={currentPage === number2}
          >
            {number2}
          </PaginationButton>
        </PaginationItem>
        <PaginationItem>
          <PaginationButton
            onClick={() => {
              setCurrentPage(() => number3);
            }}
            isActive={currentPage === number3}
          >
            {number3}
          </PaginationButton>
        </PaginationItem>
        <PaginationItem
          className={`${currentPage <= totalPages - 3 ? "" : "hidden"}`}
        >
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationButton
            onClick={() => {
              setCurrentPage(() => totalPages);
            }}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationButton>
        </PaginationItem>
        <PaginationItem>
          <PaginationNextButton
            onClick={() => {
              setCurrentPage((state) => state + 1);
            }}
            disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
