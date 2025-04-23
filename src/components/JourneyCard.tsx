"use client";

import { JourneyCardProps } from "@/types/journeys";
import StationInfoCard from "./StationInfoCard";
import { ChevronsDown, Hourglass, Ruler } from "lucide-react";

function secondsToTime(e: number) {
  const h = Math.floor(e / 3600)
      .toString()
      .padStart(2, "0"),
    m = Math.floor((e % 3600) / 60)
      .toString()
      .padStart(2, "0"),
    s = Math.floor(e % 60)
      .toString()
      .padStart(2, "0");

  return h + ":" + m + ":" + s;
}

export default function JourneyCard({ journey }: JourneyCardProps) {
  if (journey) {
    return (
      <section className="flex flex-col gap-y-2 px-4">
        <StationInfoCard
          variant="departure"
          name={journey.departureStationId.stationName ?? ""}
          address={journey.departureStationId.stationAddress ?? ""}
          x={
            journey.departureStationId.coordinateX
              ? parseFloat(journey.departureStationId.coordinateX).toFixed(4)
              : ""
          }
          y={
            journey.departureStationId.coordinateY
              ? parseFloat(journey.departureStationId.coordinateY).toFixed(4)
              : ""
          }
          time={journey.departureDateTime as Date}
        />
        <article className="grid grid-cols-3 py-2">
          <p className="col-start-2 self-center justify-self-center">
            <ChevronsDown />
          </p>
          <article className="col-start-3 flex flex-col gap-y-2">
            <article className="flex items-center gap-x-2">
              <Ruler />
              <p className="text-sm text-gray-500">{journey.distance} m</p>
            </article>
            <article className="flex items-center gap-x-2">
              <Hourglass />
              <p className="text-sm text-gray-500">
                {journey.duration ? secondsToTime(journey.duration) : ""}
              </p>
            </article>
          </article>
        </article>

        <StationInfoCard
          variant="return"
          name={journey.returnStationId.stationName ?? ""}
          address={journey.returnStationId.stationAddress ?? ""}
          x={
            journey.returnStationId.coordinateX
              ? parseFloat(journey.returnStationId.coordinateX).toFixed(4)
              : ""
          }
          y={
            journey.returnStationId.coordinateY
              ? parseFloat(journey.returnStationId.coordinateY).toFixed(4)
              : ""
          }
          time={journey.returnDateTime as Date}
        />
      </section>
    );
  }
}
