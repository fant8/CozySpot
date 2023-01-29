import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SpotifyWebAPI from "spotify-web-api-node";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "../apikeys";

const Home = () => {
    const [queryParams] = useSearchParams();
    const access_token = queryParams.get("access_token");
    const refresh_token = queryParams.get("refresh_token");
    const [userInfo, setUserInfo] = useState({});
    const spotifyApi = new SpotifyWebAPI({
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        redirectUri: REDIRECT_URI
    });
    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);


    useEffect(() => {
        //
        console.log("updated")
    });

    function getUserInfo() {
        spotifyApi.getMe()
            .then(res => setUserInfo(res))
            .catch(res => console.log("error response", res));
    }

    return(
        <p>Welcome! {JSON.stringify(userInfo)}</p>
    )
}

export default Home