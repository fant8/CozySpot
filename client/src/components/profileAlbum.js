import React from "react";
import '../profile_src/profile.css'

const ProfileAlbum = (props) => {
    return (
        <div class="column">
            {/* TODO Need to add Onclick to jump to the actual Album */} 
            <img src={props.album.image} style={{width: "100%", height: "70%"}}></img>
            <p>{props.album.name}</p>
        </div>
    )
}

export default ProfileAlbum;