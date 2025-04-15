"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import DynamicPagination from "./DynamicPagination";
import { useState } from "react";
import { Order } from "@/types/utils";
import { useMapContext } from "@/context/MapContext";
import { countJourneyOptions, journeysOptions } from "@/utils/queries/journeys";
import { JourneysQueryInput } from "@/types/journeys";
import JourneyList from "./JourneyList";
import JourneyDropDown from "./JourneyDropDown";

export default function JourneyListPage(props: JourneysQueryInput) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { id, dTime, rTime, distance, duration } = useMapContext();

  const { triggerRef } = props;
  const queryOptions = journeysOptions({
    skip: currentPage - 1,
    take: 10,
    id: id as Order,
    dTime: dTime as Order,
    rTime: rTime as Order,
    distance: distance as Order,
    duration: duration as Order,
  });
  const { data: journeys } = useSuspenseQuery(queryOptions);
  const { data: count } = useSuspenseQuery(countJourneyOptions);
  const t = useTranslations("JourneyList");

  if (!Array.isArray(journeys)) {
    return null;
  }

  return (
    <section className="w-full px-8 py-8 flex flex-col gap-y-4">
      <article className="flex justify-between">
        <h1 className="text-2xl font-semibold">{t("journeys")}</h1>
        <JourneyDropDown />
      </article>
      <JourneyList journeys={journeys} triggerRef={triggerRef} />
      <DynamicPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.ceil((count?.count ?? 0) / 10)}
      />
    </section>
  );
}
