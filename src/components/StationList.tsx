import { useMapContext } from "@/context/MapContext";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { RefObject } from "react";
import { StationsList } from "@/types/stations";

export default function StationList({
  stations,
  triggerRef,
}: {
  stations: StationsList;
  triggerRef: RefObject<HTMLButtonElement | null>;
}) {
  const { setCoordinate, setSelectedStation } = useMapContext();

  return (
    <section className="h-[65dvh] overflow-x-hidden overflow-y-scroll">
      <Table>
        <TableBody>
          {stations.map((station) => (
            <TableRow key={station.id}>
              <TableCell
                className="flex cursor-pointer flex-col gap-y-1"
                onClick={() => {
                  setCoordinate(() => {
                    return {
                      lat: station.coordinateY ?? null,
                      lng: station.coordinateX ?? null,
                    };
                  });
                  setSelectedStation(station);
                  triggerRef.current?.click();
                }}
              >
                <span className="text-lg font-medium">
                  {station.stationName ?? ""}
                </span>
                <span className="font-light text-gray-600">
                  {station.stationAddress ?? ""}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
