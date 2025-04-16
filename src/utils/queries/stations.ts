import {
  DestinationsQueryInput,
  StationsList,
  StationsQueryInput,
  StationWithCount,
} from "@/types/stations";
import { CustomError } from "@/types/utils";
import { queryOptions } from "@tanstack/react-query";

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
          }`
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
          `${process.env.NEXT_PUBLIC_API_URL}/stations/${id}`
        );
        const data:
          | {
              station_name: string;
              station_address: string;
              start_count: string;
              return_count: string;
              start_average: string;
              return_average: string;
            }
          | CustomError = await res.json();
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
        `${process.env.NEXT_PUBLIC_API_URL}/stations/count`
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
          }`
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
