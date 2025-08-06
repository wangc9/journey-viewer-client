"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getQueryClient } from "./getQueryClient";
import { ReactNode } from "react";
import { MapProvider } from "@/context/MapContext";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <MapProvider>
          {children}
          <ReactQueryDevtools />
        </MapProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
