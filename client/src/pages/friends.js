import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import ProfileTile from "../components/profileTile";
import Layout from "../components/layout";

const Friends = (props) => {
    const [users, setUsers] = useState([]);


    function getUsers() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','http://34.130.27.97:3000');
        headers.append("Access-Control-Allow-Origin", "*");

        fetch(`http://34.130.27.97:1337/users/allusers`, {
            headers: headers,
            method: "GET",
            mode: "cors",
        })
            .then(function (response) {
                if (response.ok) {
                    console.log("Click was recorded")
                    response.json().then(res => {
                        console.log(res);
                        setUsers(res);
                    });
                    return
                }
                throw new Error("Request failed.")
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    useEffect(() => {
        if (users.length == 0) getUsers();
    });

    return (
        <div className="album py-5 bg-light">
            <Layout/>
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {users.map(person => (
                        <ProfileTile data={person}/>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Friends