import { useMapContext } from "@/context/MapContext";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useMap, useMapEvent } from "react-leaflet";
import L from "leaflet";

export default function MapEvents({
  setIcon,
}: {
  setIcon: Dispatch<SetStateAction<L.Icon<L.IconOptions> | undefined>>;
}) {
  const map = useMap();
  const { coordinate } = useMapContext();

  const changeIcon = useMapEvent("zoomend", () => {
    const zoom = changeIcon.getZoom();
    if (zoom <= 15 && zoom >= 12) {
      setIcon(
        L.icon({
          iconUrl:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmQyMzAiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kb3QtaWNvbiBsdWNpZGUtZG90Ij48Y2lyY2xlIGN4PSIxMi4xIiBjeT0iMTIuMSIgcj0iMSIvPjwvc3ZnPg==",
          iconRetinaUrl:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmQyMzAiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kb3QtaWNvbiBsdWNpZGUtZG90Ij48Y2lyY2xlIGN4PSIxMi4xIiBjeT0iMTIuMSIgcj0iMSIvPjwvc3ZnPg==",
          iconSize: [30, 30],
        })
      );
    } else if (zoom > 15) {
      setIcon(
        L.icon({
          iconUrl:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJpa2UtaWNvbiBsdWNpZGUtYmlrZSI+PGNpcmNsZSBjeD0iMTguNSIgY3k9IjE3LjUiIHI9IjMuNSIvPjxjaXJjbGUgY3g9IjUuNSIgY3k9IjE3LjUiIHI9IjMuNSIvPjxjaXJjbGUgY3g9IjE1IiBjeT0iNSIgcj0iMSIvPjxwYXRoIGQ9Ik0xMiAxNy41VjE0bC0zLTMgNC0zIDIgM2gyIi8+PC9zdmc+",
          iconRetinaUrl:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJpa2UtaWNvbiBsdWNpZGUtYmlrZSI+PGNpcmNsZSBjeD0iMTguNSIgY3k9IjE3LjUiIHI9IjMuNSIvPjxjaXJjbGUgY3g9IjUuNSIgY3k9IjE3LjUiIHI9IjMuNSIvPjxjaXJjbGUgY3g9IjE1IiBjeT0iNSIgcj0iMSIvPjxwYXRoIGQ9Ik0xMiAxNy41VjE0bC0zLTMgNC0zIDIgM2gyIi8+PC9zdmc+",
          shadowUrl:
            "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        })
      );
    } else {
      setIcon(undefined);
    }
  });

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
