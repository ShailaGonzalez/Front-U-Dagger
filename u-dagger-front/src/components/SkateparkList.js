import React, { useState, useEffect } from 'react';
import { getSkateparks } from '../services/skateparkService';
import { Link } from 'react-router-dom';

const SkateparkList = () => {
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

  return (
    <div>
      <h1>Skateparks List</h1>
      {error && <p className="error">{error}</p>} {/* Mostrar errores */}
      {loading && <p>Loading...</p>} {/* Mostrar carga */}
      <Link to="/skatepark-map"><button>View Map</button></Link>
      <ul>
        {skateparks.map(skatepark => (
          <li key={skatepark.id}>
            {skatepark.name} - {skatepark.location}
            <Link to={`/skateparks/${skatepark.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkateparkList;
