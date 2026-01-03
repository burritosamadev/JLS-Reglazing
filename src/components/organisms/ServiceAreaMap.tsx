import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// Fix Leaflet default icon issue in React
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

L.Marker.prototype.options.icon = DefaultIcon

export default function ServiceAreaMap() {
  // Service area centers (approximate coordinates)
  const serviceAreas = [
    {
      name: 'San Bernardino County',
      center: [34.1083, -117.2898] as [number, number],
      radius: 40000, // 40km radius
      color: '#FBB040',
    },
    {
      name: 'Riverside County',
      center: [33.7537, -116.2059] as [number, number],
      radius: 45000,
      color: '#ca8c2a',
    },
    {
      name: 'Hemet',
      center: [33.7475, -116.9719] as [number, number],
      radius: 20000,
      color: '#9b6a1e',
    },
    {
      name: 'Los Angeles County',
      center: [34.0522, -118.2437] as [number, number],
      radius: 50000,
      color: '#6d4a12',
    },
    {
      name: 'Victorville',
      center: [34.5362, -117.2912] as [number, number],
      radius: 25000,
      color: '#432c07',
    },
  ]

  // Center map on Southern California
  const mapCenter: [number, number] = [33.9, -117.5]

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl z-0">
      <MapContainer
        center={mapCenter}
        zoom={8}
        scrollWheelZoom={false}
        dragging={false}
        touchZoom={false}
        doubleClickZoom={false}
        zoomControl={false}
        className="h-full w-full"
        style={{ zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {serviceAreas.map((area) => (
          <Circle
            key={area.name}
            center={area.center}
            radius={area.radius}
            pathOptions={{
              color: area.color,
              fillColor: area.color,
              fillOpacity: 0.2,
              weight: 2,
            }}
          >
            <Popup>
              <div className="font-jost">
                <strong className="font-orbitron">{area.name}</strong>
                <p className="text-sm mt-1">We service this entire area</p>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  )
}
