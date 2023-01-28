import React from "react";
import { useState } from "react";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "../../../apikeys"
const SpotifyWebAPI = require('spotify-web-api-node')
const Login = () => {


    const [token, setToken] = useState("")

    function authenticate() {
        let spotifyApi = new SpotifyWebAPI({
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            redirectUri: REDIRECT_URI
        });
        let scopes = ['user-read-private', 'user-read-email'];
        let state = 'randomStringDesuNe';
        let authURL = spotifyApi.createAuthorizeURL(scopes, state);
        
        window.location.href = authURL;
    }

    return (
        <div>
            <input></input>
            <input></input>
            <button onClick={() => authenticate()}>Log in with Spotify</button>
        </div>
    )

}

export default Login