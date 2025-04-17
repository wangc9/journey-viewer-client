import { useMapContext } from "@/context/MapContext";
import JourneyCard from "./JourneyCard";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { RefObject } from "react";

export default function JourneyDrawer({
  triggerRef,
  closeRef,
}: {
  triggerRef: RefObject<HTMLButtonElement | null>;
  closeRef: RefObject<HTMLButtonElement | null>;
}) {
  const {
    selectedJourney,
    setSelectedDepartureStation,
    setSelectedDestinationStation,
  } = useMapContext();

  return (
    <Drawer direction="left">
      <DrawerTrigger ref={triggerRef} className="hidden" />
      <DrawerContent style={{ minWidth: "33.3%", overflowY: "auto" }}>
        <DrawerHeader>
          <DrawerTitle>Journey {selectedJourney?.id}</DrawerTitle>
        </DrawerHeader>
        <JourneyCard journey={selectedJourney ?? undefined} />
        <DrawerFooter>
          <DrawerClose asChild className="cursor-pointer">
            <button
              className="btn btn-primary"
              ref={closeRef}
              onClick={() => {
                setSelectedDepartureStation(null);
                setSelectedDestinationStation(null);
              }}
            >
              Close
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
