import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpotifyWebAPI from "spotify-web-api-node";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "./apikeys";
import App from './App';
import './index.css';
import Layout from './pages/layout';
import Profile from './pages/profile';
import Home from './pages/home';
import Login from './pages/login';
import Merge from './pages/merge';

const spotifyApi = new SpotifyWebAPI({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="profile" element={<Profile />} />
          <Route path="merge" element={<Merge/> } />
          <Route path="login" element={<Login/> } />
          <Route path="home" element={ <Home spotifyApi={spotifyApi}/> } />
      </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
