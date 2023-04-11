import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import UserAPI from "../util/spotifyFetch";
import Layout from "../components/layout";

const Home = (props) => {
    const [queryParams] = useSearchParams();
    const access_token = queryParams.get("access_token");
    const refresh_token = queryParams.get("refresh_token");
    const [userInfo, setUserInfo] = useState({ user: null });
    const [songData, setSongs] = useState([]);
    const [hasFetched, updateFetch] = useState(false);

    const spotifyApi = props.spotifyApi;
    //const user = props.userApi;

    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);

    function getTracks() {
        spotifyApi.getMyTopTracks({
            limit: 10,
            offset: 1
        })
            .then(data => setSongs(data))
            .catch(err => console.log("error! ", err));
    }

    useEffect(() => {
        if (!hasFetched) {
            props.userApi.userInfo();
            setUserInfo(props.userApi);
            updateFetch(true);
            console.log(props.userApi);
        }
        if (!userInfo.done) {
            Promise.resolve().then(() => new Promise(res => setTimeout(res, 1000)));
        } else {
            console.log("Making write!");
            testRequest();
        }
    });

    function testRequest() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','http://34.130.27.97:3000');
        headers.append("Access-Control-Allow-Origin", "*");

        console.log(props.userApi, props.userApi.user);

        fetch(`http://34.130.27.97:1337/users/add`, {
            headers: headers,
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
                id: props.userApi.user.id, email: props.userApi.user.email, name: props.userApi.user.name, photo: props.userApi.user.profile_img,
            }),
        })
            .then(function (response) {
                if (response.ok) {
                    console.log("Click was recorded");
                    console.log(response);
                    return
                }
                throw new Error("Request failed.");
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div>
            <Layout />
            <h2>Welcome {userInfo.user != null ? userInfo.user.name : ""}!</h2>
            <h3>Your Top Tracks this Month:</h3>
        </div>
    )
}

export default Home