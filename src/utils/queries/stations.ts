import { StationsQueryInput } from "@/types/stations";
import { queryOptions } from "@tanstack/react-query";

export const stationsOptions = ({
  skip = 0,
  take,
  id = "ASC",
  name = "ASC",
  address = "ASC",
  x = "ASC",
  y = "ASC",
  search,
}: Omit<StationsQueryInput, "triggerRef">) => {
  return queryOptions({
    queryKey: ["stations", { skip, take, id, name, address, x, y, search }],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/stations?skip=${skip}${
            take ? `&take=${take}` : ""
          }&id=${id}&name=${name}&address=${address}&x=${x}&y=${y}${
            search ? `&search=${search}` : ""
          }`
        );
        const data:
          | Array<{
              id: number;
              stationName?: string;
              stationAddress?: string;
              coordinateX?: string;
              coordinateY?: string;
            }>
          | {
              status: number;
              error: string;
              message: string;
              code: string;
              timestamp: string;
              path: string;
            } = await res.json();
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
          | {
              status: number;
              error: string;
              message: string;
              code: string;
              timestamp: string;
              path: string;
            } = await res.json();
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
