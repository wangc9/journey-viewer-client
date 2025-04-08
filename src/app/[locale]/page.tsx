"use client";

import StationListPage from "@/components/StationListPage";
import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";

export default function Home() {
  const Map = useMemo(
    () => dynamic(() => import("@/components/Map"), { ssr: false }),
    []
  );
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <main className="grid grid-cols-[1fr_2fr]">
      <StationListPage triggerRef={triggerRef} />
      <Map triggerRef={triggerRef} />
    </main>
  );
}
