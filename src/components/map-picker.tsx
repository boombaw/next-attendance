"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Circle, useMap, Marker, Popup, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix Leaflet's default icon path issues
// We use a useEffect to apply this only on the client side to avoid SSR issues
const iconRetinaUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png"
const iconUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png"
const shadowUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"

export function setupLeafletIcon() {
    L.Marker.prototype.options.icon = L.icon({
        iconUrl,
        iconRetinaUrl,
        shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
}

// Call setup once
if (typeof window !== 'undefined') {
    setupLeafletIcon();
}

interface MapPickerProps {
    center: [number, number]
    radius: number
}

function MapUpdater({ center }: { center: [number, number] }) {
    const map = useMap()
    useEffect(() => {
        map.setView(center)
    }, [center, map])
    return null
}

function LocationMarker() {
    const map = useMapEvents({
        click() {
            // Triggers Leaflet's built-in geolocation
            map.locate({ setView: true, maxZoom: 16 });
        },
        locationfound(e) {
            console.log("Location found:", e.latlng);
        },
    });

    return null;
}


export default function MapPicker({ center, radius }: MapPickerProps) {
    return (
        <MapContainer
            center={center}
            zoom={15}
            scrollWheelZoom={false}
            className="w-full h-full rounded-xl z-0"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
                <Popup>Office Location</Popup>
            </Marker>
            <Circle
                center={center}
                radius={radius}
                pathOptions={{ color: '#24aceb', fillColor: '#24aceb', fillOpacity: 0.2 }}
            />
            <MapUpdater center={center} />
            <LocationMarker />
        </MapContainer>
    )
}
