import { StationInfoCardProps } from "@/types/journeys";
import {
  MapPinCheck,
  MapPinMinus,
  MapPinned,
  Timer,
  TimerOff,
} from "lucide-react";

export default function StationInfoCard({
  variant,
  name,
  address,
  x,
  y,
  time,
}: StationInfoCardProps) {
  return (
    <article className="flex flex-col gap-y-2 rounded-2xl border-2 border-gray-700 px-2 py-4 cursor-pointer">
      <article className="flex gap-x-2 items-center">
        {variant === "departure" ? (
          <MapPinCheck color="green" />
        ) : (
          <MapPinMinus color="red" />
        )}
        <p className="text-sm text-gray-500">{address}</p>
      </article>
      <article className="flex gap-x-2 items-center">
        <MapPinned />
        <p className="text-sm text-gray-500">{`(${x}, ${y})`}</p>
      </article>
      <article className="flex gap-x-2 items-center">
        {variant === "departure" ? (
          <Timer color="green" />
        ) : (
          <TimerOff color="red" />
        )}
        <p className="text-sm text-gray-500">
          {new Date(time).toLocaleString()}
        </p>
      </article>

      <article className="flex flex-col text-center py-6">
        <p className="text-2xl font-bold">{name}</p>
      </article>
    </article>
  );
}
