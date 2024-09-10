import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: 0 }}>
          <li style={{ margin: '0 10px' }}><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/users" style={{ color: '#fff', textDecoration: 'none' }}>Users List</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>Products List</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/skateparks" style={{ color: '#fff', textDecoration: 'none' }}>Skateparks List</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/skatepark-map" style={{ color: '#fff', textDecoration: 'none' }}>Skatepark Map</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/add-product" style={{ color: '#fff', textDecoration: 'none' }}>Add Product</Link></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

