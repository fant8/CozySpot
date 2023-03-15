import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import UserAPI from "../util/spotifyFetch";
import Layout from "../components/layout";

const Home = (props) => {
    const [queryParams] = useSearchParams();
    const access_token = queryParams.get("access_token");
    const refresh_token = queryParams.get("refresh_token");
    const [userInfo, setUserInfo] = useState({ done: false });
    const [hasFetched, updateFetch] = useState(false);

    const spotifyApi = props.spotifyApi;

    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);


    useEffect(() => {
        if (!hasFetched) {
            let uAPI = new UserAPI(spotifyApi)
            setUserInfo(uAPI);
            uAPI.userInfo();
            updateFetch(true);
        }
        if (!userInfo.done) {
            Promise.resolve().then(() => new Promise(res => setTimeout(res, 1000)));
        }
        console.log(UserAPI);
    });


    function testRequest() {
        const d = new Date("2022-03-25");
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','http://localhost:3000');
        headers.append("Access-Control-Allow-Origin", "*");

        fetch(`http://localhost:1337/users/add`, {
            headers: headers,
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
                name: "jane doe", password: "6969",  email: "zuck@meta.com"
            }),
        })
            .then(function (response) {
                if (response.ok) {
                    console.log("Click was recorded")
                    console.log(response)
                    return
                }
                throw new Error("Request failed.")
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <div>
            <Layout />
            <button onClick={() => testRequest()}>Test</button>
            <p>Welcome! {"user" in userInfo ? (userInfo.user ? userInfo.user.name : "") : ""}</p>
        </div>
    )
}

export default Home