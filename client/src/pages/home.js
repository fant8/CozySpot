import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import UserAPI from "../util/spotifyFetch";
import Layout from "../components/layout";

const Home = (props) => {
    const [queryParams] = useSearchParams();
    const access_token = queryParams.get("access_token");
    const refresh_token = queryParams.get("refresh_token");
    const [userInfo, setUserInfo] = useState({done : false});
    const [hasFetched, updateFetch] = useState(false);

    const spotifyApi = props.spotifyApi;

    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);


    useEffect(() => {
        if (!hasFetched){
            let uAPI = new UserAPI(spotifyApi)
            setUserInfo(uAPI);
            uAPI.userInfo();
            updateFetch(true);
        }
        if (!userInfo.done){
            Promise.resolve().then(() => new Promise(res => setTimeout(res, 1000)));
        }
        console.log(UserAPI);
    });

    function getUserInfo() {
        console.log("woot");
    }

    return(
        <div>
            <Layout />
            <p>Welcome! {JSON.stringify(userInfo)}</p>
            <button onClick={getUserInfo}>Click me!</button>
        </div>
    )
}

export default Home