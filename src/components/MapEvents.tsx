import { useMapContext } from "@/context/MapContext";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function MapEvents() {
  const map = useMap();
  const { coordinate } = useMapContext();

  useEffect(() => {
    if (coordinate.lat && coordinate.lng) {
      const lat = parseFloat(coordinate.lat);
      const lng = parseFloat(coordinate.lng);
      if (!isNaN(lat) && !isNaN(lng)) {
        map.panTo([lat, lng], {
          animate: true,
          duration: 2,
        });
      }
    }
  }, [coordinate]);

  return null;
}
