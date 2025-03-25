"use client";

import StationListPage from "@/components/StationListPage";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Home() {
  const Map = useMemo(
    () => dynamic(() => import("@/components/Map"), { ssr: false }),
    []
  );
  return (
    <main className="grid grid-cols-[1fr_2fr]">
      <StationListPage />
      <Map />
    </main>
  );
}
