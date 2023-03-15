import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const ProfileTile = (props) => {
    const [add, setAdd] = useState("+Add")

    function addFriend(){
        setAdd("Added")
    }

    const navigate = useNavigate()

    function viewProfile(){
        return;
        //useCallback(() => navigate('/sample', {replace: true}), [navigate]);
    }

    return (
        <div className="col">
            <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                    <h5 className="card-text">{props.name}</h5>
                    <p className="card-text">{props.bio}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => viewProfile()}>View Profile</button>
                        </div>
                        <small style={{cursor:"pointer"}} className="text-muted" onClick={() => addFriend()}>{add}</small>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProfileTile;