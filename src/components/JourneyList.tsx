// import { useMapContext } from "@/context/MapContext";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  // DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { RefObject } from "react";
// import StationCard from "./StationCard";
import { JourneysList } from "@/types/journeys";

export default function JourneyList({
  journeys,
  triggerRef,
}: {
  journeys: JourneysList;
  triggerRef: RefObject<HTMLButtonElement | null>;
}) {
  return (
    <section className="h-[65dvh] overflow-y-scroll overflow-x-hidden">
      <Table>
        <TableBody>
          {journeys.map((journey) => (
            <TableRow key={journey.id}>
              <TableCell
                className="flex flex-col gap-y-1 cursor-pointer"
                onClick={() => {
                  // setCoordinate(() => {
                  //   return {
                  //     lat: station.coordinateY ?? null,
                  //     lng: station.coordinateX ?? null,
                  //   };
                  // });
                  // setSelectedStation(station);
                  triggerRef.current?.click();
                }}
              >
                <span className="font-medium text-lg">
                  {journey.departureStationId
                    ? journey.departureStationId.stationName
                    : ""}
                  {" -> "}
                  {journey.returnStationId
                    ? journey.returnStationId.stationName
                    : ""}
                </span>
                <span className="font-light text-gray-600">
                  {journey.departureDateTime
                    ? new Date(journey.departureDateTime).toLocaleString()
                    : ""}
                  {" -> "}
                  {journey.returnDateTime
                    ? new Date(journey.returnDateTime).toLocaleString()
                    : ""}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Drawer direction="left">
        <DrawerTrigger ref={triggerRef} className="hidden" />
        <DrawerContent style={{ minWidth: "33.3%", overflowY: "auto" }}>
          <DrawerHeader>
            <DrawerTitle>Journey</DrawerTitle>
            {/* <DrawerTitle>{selectedStation?.stationName ?? ""}</DrawerTitle>
            <DrawerDescription>
              {selectedStation?.stationAddress ?? ""}
            </DrawerDescription> */}
          </DrawerHeader>
          {/* <StationCard stationId={selectedStation?.id ?? 0} /> */}
          <DrawerFooter>
            <DrawerClose asChild className="cursor-pointer">
              <button className="btn btn-primary">Close</button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  );
}
