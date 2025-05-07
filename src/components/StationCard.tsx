"use client";

import { StationCardProps } from "@/types/stations";
import NumberCard from "./NumberCard";
import { useTranslations } from "next-intl";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function StationCard({ station, count }: StationCardProps) {
  const t = useTranslations("StationCard");

  return (
    <section className="flex flex-col">
      <section className="flex flex-col gap-y-2 px-4 lg:grid lg:grid-cols-2 lg:gap-x-4">
        <NumberCard title={t("start_count")} value={station.start_count} />
        <NumberCard title={t("end_count")} value={station.return_count} />
        <NumberCard
          title={t("start_average")}
          value={parseFloat(station.start_average).toFixed(2)}
          unit="m"
        />
        <NumberCard
          title={t("start_average")}
          value={parseFloat(station.return_average).toFixed(2)}
          unit="m"
        />
      </section>
      <Accordion type="single" collapsible>
        <AccordionItem value="popularDestinations" className="px-4">
          <AccordionTrigger>
            <span className="font-semibold">{t("popular_destinations")}</span>
          </AccordionTrigger>
          <AccordionContent>
            <section className="px-4">
              <Table>
                <TableBody>
                  {count.map((station) => (
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
    </section>
  );
}
