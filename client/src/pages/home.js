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
    //const user = props.userApi;

    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);


    useEffect(() => {
        if (!hasFetched) {
            setUserInfo(props.userApi);
            props.userApi.userInfo();
            updateFetch(true);
            console.log(props.userApi)
        }
        if (!userInfo.done) {
            Promise.resolve().then(() => new Promise(res => setTimeout(res, 1000)));
        } else {
            console.log("Making write!");
            testRequest();
        }
    });

    function welcomeMessage() {
        if (props.userApi.user != null){
            return `Welcome ${props.userApi.user.name}!`;
        }else{
            return "Welcome!";
        }
    }

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
            <h2>{welcomeMessage()}</h2>
        </div>
    )
}

export default Home