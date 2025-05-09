import { UnauthorisedError } from "@/types/utils";
import { queryOptions } from "@tanstack/react-query";

export const usersOptions = ({
  skip = 0,
  take,
}: {
  skip?: number;
  take?: number;
}) => {
  return queryOptions({
    queryKey: ["users", { skip, take }],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users?skip=${skip}${
            take ? `&take=${take}` : ""
          }`,
          { credentials: "include" },
        );
        const data: User[] | UnauthorisedError = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
      return { error: "error" };
    },
  });
};
