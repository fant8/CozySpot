import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import ProfileTile from "../components/profileTile";

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

    return (
        <div class="album py-5 bg-light">
            <div class="container">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {users.map(person => (
                        <ProfileTile data={person}/>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Friends