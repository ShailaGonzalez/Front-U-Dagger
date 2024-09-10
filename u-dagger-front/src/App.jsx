// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import UsersList from './components/UsersList';
import ProductsList from './components/ProductsList';
import SkateparkList from './components/SkateparkList';
import SkateparkMap from './components/SkateparkMap';
import Home from './components/Home';
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
            <Route path="/users" component={UsersList} />
            <Route path="/products" component={ProductsList} />
            <Route path="/skateparks" component={SkateparkList} />
            <Route path="/skatepark-map" component={SkateparkMap} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

