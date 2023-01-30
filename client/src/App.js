import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Header from './components/header';
import { Container } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Cozy Spot</h1>
      <h2>Spotify Extension</h2>
    </div>
  );
}

export default App;
