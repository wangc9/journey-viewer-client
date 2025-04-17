"use client";

import JourneyDrawer from "@/components/JourneyDrawer";
import JourneyListPage from "@/components/JourneyListPage";
import StationDrawer from "@/components/StationDrawer";
import StationListPage from "@/components/StationListPage";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";

export default function Home() {
  const Map = useMemo(
    () => dynamic(() => import("@/components/Map"), { ssr: false }),
    []
  );
  const triggerRef = useRef<HTMLButtonElement>(null);
  const journeyTriggerRef = useRef<HTMLButtonElement>(null);
  const stationCloseRef = useRef<HTMLButtonElement>(null);
  const journeyCloseRef = useRef<HTMLButtonElement>(null);
  const [showStations, setShowStations] = useState<boolean>(true);

  return (
    <main className="grid grid-cols-[1fr_2fr]">
      <section className="flex flex-col gap-y-2">
        <article className="grid grid-cols-2 gap-x-2">
          <Button
            className={`${
              showStations
                ? "bg-accent text-accent-foreground hover:text-white"
                : ""
            }`}
            onClick={() => setShowStations(true)}
          >
            Stations
          </Button>
          <Button
            className={`${
              !showStations ? "bg-accent text-accent-foreground" : ""
            }`}
            onClick={() => setShowStations(false)}
          >
            Journeys
          </Button>
        </article>
        {showStations ? (
          <StationListPage triggerRef={triggerRef} />
        ) : (
          <JourneyListPage triggerRef={journeyTriggerRef} />
        )}
        {/* <StationListPage triggerRef={triggerRef} /> */}
        <StationDrawer triggerRef={triggerRef} closeRef={stationCloseRef} />
        <JourneyDrawer
          triggerRef={journeyTriggerRef}
          closeRef={journeyCloseRef}
        />
      </section>
      <Map triggerRef={triggerRef} journeyCloseRef={journeyCloseRef} />
    </main>
  );
}
