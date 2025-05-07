import { useMapContext } from "@/context/MapContext";
import StationCard from "./StationCard";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { RefObject, Suspense } from "react";
import {
  destinationsOptions,
  stationJourneyCountByMonthOptions,
  stationOptions,
} from "@/utils/queries/stations";
import { useSuspenseQueries } from "@tanstack/react-query";
import JourneyCountChart from "./JourneyCountChart";
import { useTranslations } from "next-intl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { ShieldAlert } from "lucide-react";

export default function StationDrawer({
  triggerRef,
  closeRef,
}: {
  triggerRef: RefObject<HTMLButtonElement | null>;
  closeRef: RefObject<HTMLButtonElement | null>;
}) {
  const t = useTranslations("StationDrawer");
  const { selectedStation } = useMapContext();
  const stationJourneyCountQueryOptions = stationJourneyCountByMonthOptions({
    id: selectedStation?.id ?? 0,
    monthStart: undefined,
    monthEnd: undefined,
  });
  const stationQueryOptions = stationOptions({ id: selectedStation?.id ?? 0 });
  const destinationQueryOptions = destinationsOptions({
    id: selectedStation?.id ?? 0,
    skip: 0,
    take: 10,
  });
  const [stationQuery, destinationQuery, stationJourneyCountQuery] =
    useSuspenseQueries({
      queries: [
        stationQueryOptions,
        destinationQueryOptions,
        stationJourneyCountQueryOptions,
      ],
    });

  return (
    <Drawer direction="left">
      <DrawerTrigger ref={triggerRef} className="hidden" />
      <Suspense
        fallback={
          <DrawerContent style={{ minWidth: "33.3%", overflowY: "auto" }}>
            Loading...
          </DrawerContent>
        }
      >
        {stationQuery.data &&
          "station_name" in stationQuery.data &&
          destinationQuery.data &&
          !("error" in destinationQuery.data) && (
            <DrawerContent style={{ minWidth: "33.3%", overflowY: "auto" }}>
              <DrawerHeader className="flex flex-row justify-between">
                <section className="flex flex-col">
                  <DrawerTitle>
                    {selectedStation?.stationName ?? ""}
                  </DrawerTitle>
                  <DrawerDescription>
                    {selectedStation?.stationAddress ?? ""}
                  </DrawerDescription>
                </section>
                {stationQuery.data.percentage &&
                  stationQuery.data.percentage !== "0" && (
                    <section className="flex flex-col">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <p className="font-bold text-red-400">
                              <ShieldAlert />{" "}
                              {stationQuery.data.percentage ?? 0} %
                            </p>
                          </TooltipTrigger>
                          <TooltipContent className="z-50" side="left">
                            <p className="w-48">
                              This is the percentage of returned journeys that
                              have a mismatch between their duration and the
                              time of return. This could be caused due to faulty
                              bicycle or station.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </section>
                  )}
              </DrawerHeader>
              <StationCard
                station={stationQuery.data}
                count={destinationQuery.data}
              />
              {stationJourneyCountQuery.data &&
                Array.isArray(stationJourneyCountQuery.data) && (
                  <section className="flex min-h-80 w-full flex-col pt-2">
                    <p className="px-4 py-2 font-semibold">
                      {t("journey_count_chart")}
                    </p>
                    <JourneyCountChart data={stationJourneyCountQuery.data} />
                  </section>
                )}
              <DrawerFooter>
                <DrawerClose asChild className="cursor-pointer">
                  <button className="btn btn-primary" ref={closeRef}>
                    Close
                  </button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          )}
      </Suspense>
    </Drawer>
  );
}
