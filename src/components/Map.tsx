import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import MapEvents from "./MapEvents";

export default function Map() {
  return (
    <MapContainer
      center={[60.171033, 24.941497]}
      zoom={20}
      style={{ width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.digitransit.fi/en/developers/apis/6-terms-of-use/">Digitransit</a> contributors'
        url="https://cdn.digitransit.fi/map/v2/hsl-map/{z}/{x}/{y}@2x.png?digitransit-subscription-key=e272a3da0ede40f0bfe2b95083b33298"
      />
      <MapEvents />
    </MapContainer>
  );
}
