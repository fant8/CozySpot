import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  function redirect(){
    window.location = "http://34.130.27.97:1337/login";
  }
  return (
    <div className="App">
      <h1>Cozy Spot</h1>
      <h2>Spotify Extension</h2>
      <button onClick={redirect}> Login with Spotify! </button>
    </div>
  );
}

export default App;
