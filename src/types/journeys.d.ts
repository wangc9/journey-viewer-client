import { RefObject } from "react";
import { Station } from "./stations";

type JourneysQueryInput = {
  take?: number;
  skip?: number;
  id?: "ASC" | "DESC";
  dTime?: "ASC" | "DESC";
  rTime?: "ASC" | "DESC";
  distance?: "ASC" | "DESC";
  duration?: "ASC" | "DESC";
  search?: string;
  triggerRef: RefObject<HTMLButtonElement | null>;
};

type Journey = {
  id: number;
  departureDateTime?: Date;
  returnDateTime?: Date;
  departureStationId: Station;
  returnStationId: Station;
  distance?: number;
  duration?: number;
};

type JourneysList = Array<Journey>;

type JourneyCardProps = {
  journey?: Journey;
};

type StationInfoCardProps = {
  variant: "departure" | "return";
  name: string;
  address: string;
  x: string;
  y: string;
  time: Date;
};
