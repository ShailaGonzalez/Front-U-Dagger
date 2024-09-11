import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import L from 'leaflet';  

// Estilos para el contenedor del mapa
const MapWrapper = styled.div`
  height: 40em;  
  width: 100%;
  max-width: 100%;

  @media (min-width: 30em) {  
    height: 50em;
  }

  @media (min-width: 48em) { 
    height: 60em;
  }

  @media (min-width: 64em) {  
    height: 70em;
  }

  @media (min-width: 80em) {  
    height: 80em;
  }
`;

const SkateparkMap = () => {
  // Coordenadas de los skateparks
  const coordinates = [
    { lat: 41.3884, lng: 2.1591, name: 'Skatepark de la Mar Bella' },
    { lat: 41.3825, lng: 2.1769, name: 'MACBA' },
    { lat: 41.3879, lng: 2.1699, name: 'Skatepark de Poblenou - Diagonal Mar' },
    { lat: 41.3722, lng: 2.1400, name: 'Skatepark de la Zona Franca' },
    { lat: 41.3922, lng: 2.1576, name: 'Skatepark de la Pau' },
    { lat: 41.3723, lng: 2.1528, name: 'Skatepark de Montjuïc' },
    { lat: 41.4042, lng: 2.1843, name: 'Skatepark de Sant Andreu' },
    { lat: 41.4112, lng: 2.1657, name: 'Skatepark de Horta' },
    { lat: 41.3715, lng: 2.1460, name: 'Skatepark de Gràcia' },
    { lat: 41.3781, lng: 2.1471, name: 'Skatepark de Sants' }
  ];

  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      // Crear un objeto de límites que incluya todos los puntos
      const bounds = L.latLngBounds(coordinates.map(coord => [coord.lat, coord.lng]));
      // Ajustar la vista del mapa para incluir todos los puntos
      mapRef.current.fitBounds(bounds);
    }
  }, [coordinates]);

  return (
    <MapWrapper>
      <MapContainer center={[41.3851, 2.1734]} zoom={13} style={{ height: '100%', width: '100%' }} ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {coordinates.map((coord, index) => (
          <Marker key={index} position={[coord.lat, coord.lng]}>
            <Popup>{coord.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </MapWrapper>
  );
};

export default SkateparkMap;
