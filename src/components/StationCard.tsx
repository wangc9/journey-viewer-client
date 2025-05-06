"use client";

import { StationCardProps } from "@/types/stations";
import { destinationsOptions, stationOptions } from "@/utils/queries/stations";
import { useSuspenseQueries } from "@tanstack/react-query";
import NumberCard from "./NumberCard";
import { useTranslations } from "next-intl";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function StationCard({ stationId }: StationCardProps) {
  const t = useTranslations("StationCard");
  const stationQueryOptions = stationOptions({ id: stationId });
  const destinationQueryOptions = destinationsOptions({
    id: stationId,
    skip: 0,
    take: 10,
  });
  const [stationQuery, destinationQuery] = useSuspenseQueries({
    queries: [stationQueryOptions, destinationQueryOptions],
  });

  if (stationQuery.data !== undefined && "station_name" in stationQuery.data) {
    return (
      <section className="flex flex-col">
        <section className="flex flex-col gap-y-2 px-4 lg:grid lg:grid-cols-2 lg:gap-x-4">
          <NumberCard
            title={t("start_count")}
            value={stationQuery.data.start_count}
          />
          <NumberCard
            title={t("end_count")}
            value={stationQuery.data.return_count}
          />
          <NumberCard
            title={t("start_average")}
            value={parseFloat(stationQuery.data.start_average).toFixed(2)}
          />
          <NumberCard
            title={t("start_average")}
            value={parseFloat(stationQuery.data.return_average).toFixed(2)}
          />
        </section>
        {destinationQuery.data !== undefined &&
          !("error" in destinationQuery.data) && (
            <Accordion type="single" collapsible>
              <AccordionItem value="popularDestinations" className="px-4">
                <AccordionTrigger>
                  <span className="font-semibold">
                    {t("popular_destinations")}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <section className="px-4">
                    <Table>
                      <TableBody>
                        {destinationQuery.data.map((station) => (
                          <TableRow key={station.id}>
                            <TableCell
                              className="grid cursor-pointer grid-cols-2"
                              // onClick={() => {
                              //   setCoordinate(() => {
                              //     return {
                              //       lat: station.coordinateY ?? null,
                              //       lng: station.coordinateX ?? null,
                              //     };
                              //   });
                              //   setSelectedStation(station);
                              //   triggerRef.current?.click();
                              // }}
                            >
                              <article className="flex flex-col gap-y-1">
                                <span className="text-lg font-medium">
                                  {station.station_name ?? ""}
                                </span>
                                <span className="font-light text-gray-600">
                                  {station.station_address ?? ""}
                                </span>
                              </article>
                              <span className="self-center text-center text-lg font-semibold">
                                {station.journey_count ?? ""}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </section>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
      </section>
    );
  }
}
