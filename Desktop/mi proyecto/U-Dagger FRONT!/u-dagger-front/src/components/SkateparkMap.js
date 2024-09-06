import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getSkateparks } from '../services/skateparksService'; // Asegúrate de que esta función esté configurada correctamente

const SkateparkMap = () => {
    const [skateparks, setSkateparks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // Añadido para manejar carga

    useEffect(() => {
        const fetchSkateparks = async () => {
            setLoading(true);
            try {
                const data = await getSkateparks();
                setSkateparks(data);
            } catch (err) {
                setError('Failed to fetch skateparks.');
            } finally {
                setLoading(false);
            }
        };

        fetchSkateparks();
    }, []);

    // Ajustar el centro del mapa si hay skateparks disponibles
    const center = skateparks.length > 0
        ? [skateparks[0].latitude, skateparks[0].longitude]
        : [41.3851, 2.1734]; // Coordenadas por defecto

    return (
        <div style={{ height: '500px', width: '100%' }}>
            <h1>Skateparks Map</h1>
            {loading && <p>Loading...</p>} {/* Mostrar carga */}
            {error && <p>Error: {error}</p>}
            <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {skateparks.map(skatepark => (
                    <Marker
                        key={skatepark.id}
                        position={[skatepark.latitude, skatepark.longitude]}
                    >
                        <Popup>
                            <strong>{skatepark.name}</strong><br />
                            {skatepark.location}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default SkateparkMap;
