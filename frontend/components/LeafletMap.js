// frontend/components/LeafletMap.js

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Link from 'next/link'

// Fix for default marker icons in Next.js
const DefaultIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div style="
    background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
    width: 32px;
    height: 32px;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    border: 3px solid white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  ">
    <span style="
      transform: rotate(45deg);
      color: white;
      font-weight: bold;
      font-size: 10px;
    "></span>
  </div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
})

// Custom marker icon creator with area code
const createAreaCodeIcon = (code) => {
  return L.divIcon({
    className: 'area-code-marker',
    html: `<div style="
      background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 3px 10px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 11px;
      font-family: system-ui, -apple-system, sans-serif;
    ">${code}</div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
  })
}

export default function LeafletMap({ center, zoom, markers }) {
  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {markers.map((marker) => (
        <Marker 
          key={marker.code} 
          position={marker.position}
          icon={createAreaCodeIcon(marker.code)}
        >
          <Popup>
            <div className="text-center min-w-[150px]">
              <div className="text-2xl font-bold text-blue-600 mb-1">{marker.code}</div>
              <div className="text-sm font-semibold text-gray-800">{marker.state}</div>
              <div className="text-xs text-gray-600 mt-1">
                {marker.cities?.slice(0, 2).join(', ')}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {marker.timezone?.split(' ')[0]}
              </div>
              <Link 
                href={`/${marker.code}/area-code`}
                className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded hover:bg-blue-700 transition"
              >
                View Details →
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}