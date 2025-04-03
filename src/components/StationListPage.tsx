import { useSuspenseQuery } from "@tanstack/react-query";
import StationList from "./StationList";
import { countStationOptions, stationsOptions } from "@/utils/queries/stations";
import { useTranslations } from "next-intl";
import DynamicPagination from "./DynamicPagination";
import { useState } from "react";

export default function StationListPage(props: StationsQueryInput) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const queryOptions = stationsOptions({
    skip: currentPage - 1,
    ...props,
  });
  const { data: stations } = useSuspenseQuery(queryOptions);
  const { data: count } = useSuspenseQuery(countStationOptions);
  const t = useTranslations("StationList");

  if (!Array.isArray(stations)) {
    return null;
  }

  return (
    <section className="w-full px-8 py-8 flex flex-col gap-y-4">
      <h1 className="text-2xl font-semibold">{t("stations")}</h1>
      <StationList stations={stations} />
      <DynamicPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.ceil((count?.count ?? 0) / 10)}
      />
    </section>
  );
}
