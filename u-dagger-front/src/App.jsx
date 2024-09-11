import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <GlobalStyles /> {/* Aplicar estilos globales */}
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UsersList} /> {/* Ruta para la gestión de usuarios */}
            <Route path="/products" component={ProductsList} />
            <Route path="/products/:id" component={ProductDetail} />
            <Route path="/skateparks" component={SkateparkList} />
            <Route path="/skatepark-map" component={SkateparkMap} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/product/:id?" component={ProductManagement} /> {/* Gestión de productos */}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
