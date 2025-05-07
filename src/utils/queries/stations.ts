import {
  DestinationsQueryInput,
  SingleStationQueryData,
  StationJourneyCountByMonth,
  StationsList,
  StationsQueryInput,
  StationWithCount,
} from "@/types/stations";
import { CustomError } from "@/types/utils";
import { queryOptions } from "@tanstack/react-query";
import { db } from "../indexDB/db";

export const stationsOptions = ({
  skip = 0,
  take,
  id,
  name,
  address,
  x,
  y,
  search,
}: Omit<StationsQueryInput, "triggerRef">) => {
  return queryOptions({
    queryKey: ["stations", { skip, take, id, name, address, x, y, search }],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/stations?skip=${skip}${
            take ? `&take=${take}` : ""
          }${id ? `&id=${id}` : ""}${name ? `&name=${name}` : ""}${
            address ? `&address=${address}` : ""
          }${x ? `&x=${x}` : ""}${y ? `&y=${y}` : ""}${
            search ? `&search=${search}` : ""
          }`,
        );
        const data: StationsList | CustomError = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
      return { error: "error" };
    },
  });
};

export const stationOptions = ({ id }: { id: number }) => {
  return queryOptions({
    queryKey: ["station", { id }],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/stations/${id}`,
        );
        const data: SingleStationQueryData | CustomError = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export const stationJourneyCountByMonthOptions = ({
  id,
  monthStart,
  monthEnd,
}: {
  id: number;
  monthStart?: string;
  monthEnd?: string;
}) => {
  return queryOptions({
    queryKey: ["stationJourneyCountByMonth", { id, monthStart, monthEnd }],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/stations/${id}/journey-count${monthStart ? `?monthStart=${monthStart}` : ""}${monthEnd ? (monthStart ? `&monthEnd=${monthEnd}` : `?monthEnd=${monthEnd}`) : ""}`,
        );
        const data: Array<StationJourneyCountByMonth> | CustomError =
          await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export const countStationOptions = queryOptions({
  queryKey: ["countStation"],
  queryFn: async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/stations/count`,
      );

      const data: { count: number } = await result.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  },
});

export const destinationsOptions = ({
  skip = 0,
  take,
  id,
  startDate,
  endDate,
}: DestinationsQueryInput) => {
  return queryOptions({
    queryKey: ["station:destinations", { skip, take, id, startDate, endDate }],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL
          }/stations/${id}/destinations?skip=${skip}${
            take ? `&take=${take}` : ""
          }${startDate ? `&startDate=${startDate}` : ""}${
            endDate ? `&endDate=${endDate}` : ""
          }`,
        );
        const data: Array<StationWithCount> | CustomError = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
      return { error: "error" };
    },
  });
};

export const savedStationOptions = queryOptions({
  queryKey: ["savedStations"],
  queryFn: async () => {
    if (typeof window === "undefined") {
      // Log a warning or handle the case where IndexedDB is not available
      console.warn("IndexedDB is not available. Skipping updateSavedStations.");
      // You might want to throw an error or return a specific state
      // depending on how your mutationFn handles errors
      return Promise.reject(new Error("IndexedDB not available"));
    }
    try {
      const res = await db.stations.toArray();

      return res;
    } catch (error) {
      console.log(error);
    }
  },
});
