import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { RefObject } from "react";
import { JourneysList } from "@/types/journeys";
import { useMapContext } from "@/context/MapContext";

export default function JourneyList({
  journeys,
  triggerRef,
}: {
  journeys: JourneysList;
  triggerRef: RefObject<HTMLButtonElement | null>;
}) {
  const {
    setSelectedJourney,
    setSelectedDepartureStation,
    setSelectedDestinationStation,
  } = useMapContext();

  return (
    <section className="h-[65dvh] overflow-y-scroll overflow-x-hidden">
      <Table>
        <TableBody>
          {journeys.map((journey) => (
            <TableRow key={journey.id}>
              <TableCell
                className="flex flex-col gap-y-1 cursor-pointer"
                onClick={() => {
                  setSelectedDepartureStation(() => journey.departureStationId);
                  setSelectedDestinationStation(() => journey.returnStationId);
                  setSelectedJourney(journey);
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
    </section>
  );
}
