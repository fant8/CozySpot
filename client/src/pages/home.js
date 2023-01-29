import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";


const Home = (props) => {
    const [queryParams] = useSearchParams();
    const access_token = queryParams.get("access_token");
    const refresh_token = queryParams.get("refresh_token");
    const [userInfo, setUserInfo] = useState({});

    const spotifyApi = props.spotifyApi;

    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);


    useEffect(() => {
        //
        getUserInfo()
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