"use client";

import { useMapContext } from "@/context/MapContext";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { RefObject, useEffect } from "react";
import { StationsList } from "@/types/stations";
import { Button } from "./ui/button";
import { SavedStation } from "@/types/utils";
import { UseMutationResult } from "@tanstack/react-query";
import { Heart } from "lucide-react";

export default function StationList({
  stations,
  triggerRef,
  savedStations,
  mutation,
}: {
  stations: StationsList;
  triggerRef: RefObject<HTMLButtonElement | null>;
  savedStations?: SavedStation[];
  mutation: UseMutationResult<
    void,
    Error,
    {
      savedStations: SavedStation[];
      stationId: number;
      loggedIn: boolean;
    },
    unknown
  >;
}) {
  const { setCoordinate, setSelectedStation } = useMapContext();

  useEffect(() => {
    console.log(savedStations);
  }, [savedStations]);

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
              <TableCell>
                <Button
                  size="icon"
                  onClick={() => {
                    mutation.mutate({
                      savedStations: savedStations ?? [],
                      stationId: station.id,
                      loggedIn: false,
                    });
                  }}
                  variant="outline"
                  className="cursor-pointer"
                >
                  <Heart
                    color={`${
                      savedStations?.find(
                        (savedStation) => savedStation.stationId === station.id,
                      )
                        ? "red"
                        : "gray"
                    }`}
                  />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
