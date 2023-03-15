import React from "react";
import '../profile_src/profile.css'

const ProfilePlaylist = (props) => {
    return (
        <div className="column">
            {/* TODO Need to add Onclick to jump to the actual Playlist */} 
            <img src={props.playlist.image} style={{width: "100%", height: "70%"}}></img>
            <p>{props.playlist.name}</p>
        </div>
    )
}

export default ProfilePlaylist;