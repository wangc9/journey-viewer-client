import { useMapContext } from "@/context/MapContext";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";

export default function MapEvents({
  setIcon,
  setDepartureIcon,
  setDestinationIcon,
}: {
  setIcon: Dispatch<SetStateAction<L.Icon<L.IconOptions> | undefined>>;
  setDepartureIcon: Dispatch<SetStateAction<L.Icon<L.IconOptions> | undefined>>;
  setDestinationIcon: Dispatch<
    SetStateAction<L.Icon<L.IconOptions> | undefined>
  >;
}) {
  const map = useMap();
  const {
    coordinate,
    selectedJourney,
    setSelectedDepartureStation,
    setSelectedDestinationStation,
  } = useMapContext();

  const mapEvents = useMapEvents({
    zoomend: () => {
      const zoom = mapEvents.getZoom();
      if (zoom <= 15 && zoom >= 12) {
        setIcon(
          L.icon({
            iconUrl:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmQyMzAiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kb3QtaWNvbiBsdWNpZGUtZG90Ij48Y2lyY2xlIGN4PSIxMi4xIiBjeT0iMTIuMSIgcj0iMSIvPjwvc3ZnPg==",
            iconRetinaUrl:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmQyMzAiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kb3QtaWNvbiBsdWNpZGUtZG90Ij48Y2lyY2xlIGN4PSIxMi4xIiBjeT0iMTIuMSIgcj0iMSIvPjwvc3ZnPg==",
            iconSize: [30, 30],
          }),
        );
        setDepartureIcon(
          L.icon({
            iconUrl:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImdyZWVuIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtbWFwLXBpbi1pY29uIGx1Y2lkZS1tYXAtcGluIj48cGF0aCBkPSJNMjAgMTBjMCA0Ljk5My01LjUzOSAxMC4xOTMtNy4zOTkgMTEuNzk5YTEgMSAwIDAgMS0xLjIwMiAwQzkuNTM5IDIwLjE5MyA0IDE0Ljk5MyA0IDEwYTggOCAwIDAgMSAxNiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iMyIvPjwvc3ZnPg==",
            iconRetinaUrl:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImdyZWVuIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtbWFwLXBpbi1pY29uIGx1Y2lkZS1tYXAtcGluIj48cGF0aCBkPSJNMjAgMTBjMCA0Ljk5My01LjUzOSAxMC4xOTMtNy4zOTkgMTEuNzk5YTEgMSAwIDAgMS0xLjIwMiAwQzkuNTM5IDIwLjE5MyA0IDE0Ljk5MyA0IDEwYTggOCAwIDAgMSAxNiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iMyIvPjwvc3ZnPg==",
            iconSize: [30, 30],
          }),
        );
        setDestinationIcon(
          L.icon({
            iconUrl:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJlZCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1hcC1waW4taWNvbiBsdWNpZGUtbWFwLXBpbiI+PHBhdGggZD0iTTIwIDEwYzAgNC45OTMtNS41MzkgMTAuMTkzLTcuMzk5IDExLjc5OWExIDEgMCAwIDEtMS4yMDIgMEM5LjUzOSAyMC4xOTMgNCAxNC45OTMgNCAxMGE4IDggMCAwIDEgMTYgMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48L3N2Zz4=",
            iconRetinaUrl:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJlZCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1hcC1waW4taWNvbiBsdWNpZGUtbWFwLXBpbiI+PHBhdGggZD0iTTIwIDEwYzAgNC45OTMtNS41MzkgMTAuMTkzLTcuMzk5IDExLjc5OWExIDEgMCAwIDEtMS4yMDIgMEM5LjUzOSAyMC4xOTMgNCAxNC45OTMgNCAxMGE4IDggMCAwIDEgMTYgMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48L3N2Zz4=",
            iconSize: [30, 30],
          }),
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
          }),
        );
        setDepartureIcon(
          L.icon({
            iconUrl:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImdyZWVuIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtY2lyY2xlLWljb24gbHVjaWRlLWNpcmNsZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4=",
            iconRetinaUrl:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImdyZWVuIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtY2lyY2xlLWljb24gbHVjaWRlLWNpcmNsZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4=",
            iconSize: [80, 80],
          }),
        );
        setDestinationIcon(
          L.icon({
            iconUrl:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJlZCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1pY29uIGx1Y2lkZS1jaXJjbGUiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PC9zdmc+",
            iconRetinaUrl:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJlZCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1pY29uIGx1Y2lkZS1jaXJjbGUiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PC9zdmc+",
            iconSize: [80, 80],
          }),
        );
      } else {
        setIcon(undefined);
      }
    },
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

  useEffect(() => {
    if (
      selectedJourney?.departureStationId &&
      selectedJourney?.returnStationId
    ) {
      setSelectedDepartureStation(selectedJourney?.departureStationId);
      setSelectedDestinationStation(selectedJourney?.returnStationId);
      const boundA: L.LatLngExpression = [
        Math.max(
          parseFloat(selectedJourney?.departureStationId.coordinateY ?? "0"),
          parseFloat(selectedJourney?.returnStationId.coordinateY ?? "0"),
        ),
        Math.max(
          parseFloat(selectedJourney?.departureStationId.coordinateX ?? "0"),
          parseFloat(selectedJourney?.returnStationId.coordinateX ?? "0"),
        ),
      ];
      const boundB: L.LatLngExpression = [
        Math.min(
          parseFloat(selectedJourney?.departureStationId.coordinateY ?? "0"),
          parseFloat(selectedJourney?.returnStationId.coordinateY ?? "0"),
        ),
        Math.min(
          parseFloat(selectedJourney?.departureStationId.coordinateX ?? "0"),
          parseFloat(selectedJourney?.returnStationId.coordinateX ?? "0"),
        ),
      ];

      const bound = L.latLngBounds([boundA, boundB]);

      map.fitBounds(bound, { padding: [50, 50] });
    }
  }, [selectedJourney]);

  return null;
}
