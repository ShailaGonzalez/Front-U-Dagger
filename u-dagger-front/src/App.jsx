import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UsersList from './components/UsersList'; 
import ProductsList from './components/ProductsList';
import SkateparkList from './components/SkateparkList';
import SkateparkMap from './components/SkateparkMap';
import Home from './components/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import UserProfile from './pages/UserProfile';
import ProductManagement from './pages/ProductManagement';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <h1>U!Dagger!</h1> {/* Este h1 es para verificar */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/skateparks" element={<SkateparkList />} />
          <Route path="/skatepark-map" element={<SkateparkMap />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/product/:id?" element={<ProductManagement />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
