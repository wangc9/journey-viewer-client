import { queryOptions } from "@tanstack/react-query";

export const stationsOptions = ({
  skip = 0,
  take = 10,
  id = "ASC",
  name = "ASC",
  address = "ASC",
  x = "ASC",
  y = "ASC",
  search,
}: StationsQueryInput) => {
  return queryOptions({
    queryKey: ["stations", { skip, take, id, name, address, x, y, search }],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL
          }/stations?skip=${skip}&take=${take}&id=${id}&name=${name}&address=${address}&x=${x}&y=${y}${
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
