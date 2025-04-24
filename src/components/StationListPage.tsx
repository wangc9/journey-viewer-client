"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import StationList from "./StationList";
import {
  countStationOptions,
  savedStationOptions,
  stationsOptions,
} from "@/utils/queries/stations";
import { useTranslations } from "next-intl";
import DynamicPagination from "./DynamicPagination";
import { useState } from "react";
import { StationsQueryInput } from "@/types/stations";
import { Order } from "@/types/utils";
import StationDropDown from "./StationDropDown";
import { useMapContext } from "@/context/MapContext";
import { updateSavedStations } from "@/utils/mutations/user";

export default function StationListPage(props: StationsQueryInput) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { id, name, address, x, y } = useMapContext();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateSavedStations,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedStations"] });
    },
  });

  const { triggerRef } = props;
  const queryOptions = stationsOptions({
    skip: currentPage - 1,
    take: 10,
    id: id as Order,
    name: name as Order,
    address: address as Order,
    x: x as Order,
    y: y as Order,
    // ...rest,
  });
  const { data: stations } = useSuspenseQuery(queryOptions);
  const { data: count } = useSuspenseQuery(countStationOptions);
  const { data: savedStations } = useQuery(savedStationOptions);

  const t = useTranslations("StationList");

  if (!Array.isArray(stations)) {
    return null;
  }

  return (
    <section className="flex w-full flex-col gap-y-4 px-8 py-8">
      <article className="flex justify-between">
        <h1 className="text-2xl font-semibold">{t("stations")}</h1>
        <StationDropDown />
      </article>
      <StationList
        stations={stations}
        triggerRef={triggerRef}
        savedStations={savedStations}
        mutation={mutation}
      />
      <DynamicPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.ceil((count?.count ?? 0) / 10)}
      />
    </section>
  );
}
