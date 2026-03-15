import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";

// Example cities coverage (latitude, longitude)
const cities = [
  { name: "Dhaka", lat: 23.8103, lng: 90.4125 },
  { name: "Chattogram", lat: 22.3569, lng: 91.7832 },
  { name: "Sylhet", lat: 24.8949, lng: 91.8687 },
  { name: "Khulna", lat: 22.8456, lng: 89.5403 },
  { name: "Rajshahi", lat: 24.3745, lng: 88.6042 },
];

const DeliveryMap = () => {
  const [zoom, setZoom] = useState(6);

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          📍 Delivery Coverage Map
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Explore the cities where BookCourier delivers books directly to your
          home.
        </p>

        <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={[23.8103, 90.4125]} // Center at Dhaka
            zoom={zoom}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />

            {cities.map((city, idx) => (
              <Marker key={idx} position={[city.lat, city.lng]}>
                <Popup>
                  {city.name} <br /> BookCourier delivers here!
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMap;
