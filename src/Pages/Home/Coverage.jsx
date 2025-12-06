import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue with Leaflet + React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const Coverage = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("/coverage.json")
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => console.error("Error fetching coverage:", err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Coverage</h2>

      <MapContainer
        center={[23.8103, 90.4125]} // Default center (Dhaka)
        zoom={6}
        scrollWheelZoom={true}
        className="h-[500px] w-full rounded-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
        />

        {cities.map((city, index) => (
          <Marker key={index} position={[city.latitude, city.longitude]}>
            <Popup>{city.city}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default Coverage;
