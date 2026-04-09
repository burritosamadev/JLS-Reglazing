'use client'

import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const DefaultIcon = L.icon({
  iconUrl: typeof icon === 'string' ? icon : (icon as { src: string }).src,
  shadowUrl: typeof iconShadow === 'string' ? iconShadow : (iconShadow as { src: string }).src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

L.Marker.prototype.options.icon = DefaultIcon

export default function ServiceAreaMap() {
  const serviceAreas = [
    { name: 'San Bernardino County', center: [34.1083, -117.2898] as [number, number], radius: 40000, color: '#1B4D7A' },
    { name: 'Riverside County', center: [33.7537, -116.2059] as [number, number], radius: 45000, color: '#2563EB' },
    { name: 'Hemet', center: [33.7475, -116.9719] as [number, number], radius: 20000, color: '#3B82F6' },
    { name: 'Los Angeles County', center: [34.0522, -118.2437] as [number, number], radius: 50000, color: '#164068' },
    { name: 'Victorville', center: [34.5362, -117.2912] as [number, number], radius: 25000, color: '#1E40AF' },
  ]

  const mapCenter: [number, number] = [33.9, -117.5]

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl z-0">
      <MapContainer center={mapCenter} zoom={8} scrollWheelZoom={false} dragging={false} touchZoom={false} doubleClickZoom={false} zoomControl={false} className="h-full w-full" style={{ zIndex: 0 }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {serviceAreas.map((area) => (
          <Circle key={area.name} center={area.center} radius={area.radius} pathOptions={{ color: area.color, fillColor: area.color, fillOpacity: 0.2, weight: 2 }}>
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
