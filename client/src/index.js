import Blog from './pages/blog';
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
import Friends from './pages/friends';

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
        <Route exact path="/"><Login /></Route>
        <Route path="/loggedIn/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="profile" element={<Profile spotifyApi={spotifyApi}/>} />
          <Route path="blog" element={<Blog spotifyApi={spotifyApi}/> } />
          <Route path="merge" element={<Merge spotifyApi={spotifyApi}/> } />
          <Route path="login" element={<Login spotifyApi={spotifyApi}/> } />
          <Route path="home" element={ <Home spotifyApi={spotifyApi}/> } />
          <Route path="friends" element={<Friends spotifyApi={spotifyApi}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

