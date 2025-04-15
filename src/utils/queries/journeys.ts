import { Journey, JourneysList, JourneysQueryInput } from "@/types/journeys";
import { CustomError } from "@/types/utils";
import { queryOptions } from "@tanstack/react-query";

export const journeysOptions = ({
  skip = 0,
  take,
  id,
  dTime,
  rTime,
  distance,
  duration,
  search,
}: Omit<JourneysQueryInput, "triggerRef">) => {
  return queryOptions({
    queryKey: [
      "journeys",
      { skip, take, id, dTime, rTime, distance, duration, search },
    ],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/journeys?skip=${skip}${
            take ? `&take=${take}` : ""
          }${id ? `&id=${id}` : ""}${dTime ? `&dTime=${dTime}` : ""}${
            rTime ? `&rTime=${rTime}` : ""
          }${distance ? `&distance=${distance}` : ""}${
            duration ? `&duration=${duration}` : ""
          }${search ? `&search=${search}` : ""}`
        );
        const data: JourneysList | CustomError = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
      return { error: "error" };
    },
  });
};

export const journeyOptions = ({ id }: { id: number }) => {
  return queryOptions({
    queryKey: ["journey", { id }],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/journeys/${id}`
        );
        const data: Journey | CustomError = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export const countJourneyOptions = queryOptions({
  queryKey: ["countJourney"],
  queryFn: async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/journeys/count`
      );

      const data: { count: number } = await result.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  },
});
