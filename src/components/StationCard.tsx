"use client";

import { StationCardProps } from "@/types/stations";
import { stationOptions } from "@/utils/queries/stations";
import { useSuspenseQuery } from "@tanstack/react-query";
import NumberCard from "./NumberCard";
import { useTranslations } from "next-intl";

export default function StationCard({ stationId }: StationCardProps) {
  const t = useTranslations("StationCard");
  const queryOptions = stationOptions({ id: stationId });
  const { data: station } = useSuspenseQuery(queryOptions);

  if (station !== undefined && "station_name" in station) {
    return (
      <section className="flex flex-col gap-y-2 lg:grid lg:grid-cols-2 lg:gap-x-4 px-4">
        <NumberCard title={t("start_count")} value={station.start_count} />
        <NumberCard title={t("end_count")} value={station.return_count} />
        <NumberCard
          title={t("start_average")}
          value={parseFloat(station.start_average).toFixed(2)}
        />
        <NumberCard
          title={t("start_average")}
          value={parseFloat(station.return_average).toFixed(2)}
        />
      </section>
    );
  }
}
