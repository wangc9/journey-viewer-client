import { useMapContext } from "@/context/MapContext";
import StationCard from "./StationCard";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { RefObject } from "react";

export default function StationDrawer({
  triggerRef,
  closeRef,
}: {
  triggerRef: RefObject<HTMLButtonElement | null>;
  closeRef: RefObject<HTMLButtonElement | null>;
}) {
  const { selectedStation } = useMapContext();
  return (
    <Drawer direction="left">
      <DrawerTrigger ref={triggerRef} className="hidden" />
      <DrawerContent style={{ minWidth: "33.3%", overflowY: "auto" }}>
        <DrawerHeader>
          <DrawerTitle>{selectedStation?.stationName ?? ""}</DrawerTitle>
          <DrawerDescription>
            {selectedStation?.stationAddress ?? ""}
          </DrawerDescription>
        </DrawerHeader>
        <StationCard stationId={selectedStation?.id ?? 0} />
        <DrawerFooter>
          <DrawerClose asChild className="cursor-pointer">
            <button className="btn btn-primary" ref={closeRef}>
              Close
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
