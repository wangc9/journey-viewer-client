import { useSuspenseQuery } from "@tanstack/react-query";
import StationList from "./StationList";
import { stationsOptions } from "@/utils/queries/stations";

export default function StationListPage(props: StationsQueryInput) {
  const queryOptions = stationsOptions(props);
  const { data } = useSuspenseQuery(queryOptions);

  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <section className="w-full px-8 py-8 flex flex-col gap-y-4">
      <h1 className="text-2xl font-semibold">Stations</h1>
      <StationList stations={data} />
    </section>
  );
}
