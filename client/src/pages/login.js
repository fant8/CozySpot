import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "../apikeys";
const SpotifyWebAPI = require('spotify-web-api-node');
const Login = () => {
    const [queryParams] = useSearchParams();
    const [token, setToken] = useState("");
    const [userInfo, updateUserInfo] = useState({});
    const spotifyApi = new SpotifyWebAPI({
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        redirectUri: REDIRECT_URI
    });
    useEffect(() => {
        fetchToken();
        getUserInfo();
    });

    function fetchToken() {
        // for now token is passed to a redirect to this page
        let code = queryParams.get("code");
    }

    function authenticate() {
        let scopes = ['user-read-private', 'user-read-email'];
        let state = 'randomStringDesuNe';
        let authURL = spotifyApi.createAuthorizeURL(scopes, state);
    }

    function getUserInfo() {
        console.log("It is working!")
        if (token) {
            spotifyApi.getMe()
            .then(data => {
                updateUserInfo(data.body)
            })
            .catch(res => console.log("error", res));
        }
    }

    return (
        <div>
            <form class="form-signin">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
                        <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"> Remember me</input>
                            </label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
                    </input>
                </input>
            </form>
            <button onClick={() => authenticate()}>Log in with Spotify</button>
            <p>{token ? "Login Successful! "  + String(userInfo) : "unsuccessful"}</p>
        </div>
    )

}

export default Login