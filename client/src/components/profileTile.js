import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useCallback } from "react";
import {useNavigate} from 'react-router-dom';

const ProfileTile = ({ data }) => {
    const [add, setAdd] = useState("+Add")

    function addFriend(){
        setAdd("Added")
    }

    const navigate = useNavigate()

    function viewProfile(){
        useCallback(() => navigate('/sample', {replace: true}), [navigate]);
    }

    return (
        <div class="col">
            <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div class="card-body">
                    <h5 className="card-text">{data.name}</h5>
                    <p class="card-text">{data.bio}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => viewProfile()}>View Profile</button>
                        </div>
                        <small style={{cursor:"pointer"}} class="text-muted" onClick={() => addFriend()}>{add}</small>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProfileTile