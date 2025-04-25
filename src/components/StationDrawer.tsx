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
import { RefObject } from "react";
import { stationJourneyCountByMonthOptions } from "@/utils/queries/stations";
import { useSuspenseQuery } from "@tanstack/react-query";
import JourneyCountChart from "./JourneyCountChart";

export default function StationDrawer({
  triggerRef,
  closeRef,
}: {
  triggerRef: RefObject<HTMLButtonElement | null>;
  closeRef: RefObject<HTMLButtonElement | null>;
}) {
  const { selectedStation } = useMapContext();
  const queryOptions = stationJourneyCountByMonthOptions({
    id: selectedStation?.id ?? 0,
    monthStart: undefined,
    monthEnd: undefined,
  });
  const { data } = useSuspenseQuery(queryOptions);

  return (
    <Drawer direction="left">
      <DrawerTrigger ref={triggerRef} className="hidden" />
      <DrawerContent style={{ minWidth: "33.3%", overflowY: "auto" }}>
        <DrawerHeader>
          <DrawerTitle>{selectedStation?.stationName ?? ""}</DrawerTitle>
          <DrawerDescription>
            {selectedStation?.stationAddress ?? ""}
          </DrawerDescription>
        </DrawerHeader>
        <StationCard stationId={selectedStation?.id ?? 0} />
        {data && Array.isArray(data) && (
          <section className="min-h-80 w-full pt-6">
            <JourneyCountChart data={data} />
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
    </Drawer>
  );
}
