import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import ProfileTile from "../components/profileTile";
import Layout from "../components/layout";

const Friends = (props) => {
    const [users, setUsers] = useState(
        [
            { id: 1, name: 'john doe', bio: "bio 1" },
            { id: 2, name: 'jane doe', bio: "bio 2" },
            { id: 3, name: 'my mom', bio: "bio 3" },
            { id: 4, name: 'your mom', bio: "bio 4" },
            { id: 5, name: 'john doe', bio: "bio 7" },
            { id: 6, name: 'jane doe', bio: "bio 6" },
            { id: 7, name: 'my mom', bio: "bio 7" },
            { id: 8, name: 'your mom', bio: "bio 8" },
            { id: 9, name: 'your mom', bio: "bio 9" }
        ]
)


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
        <div className="album py-5 bg-light">
            <button onClick={getUsers}></button>
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