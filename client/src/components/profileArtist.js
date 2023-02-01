import React from "react";
import '../profile_src/profile.css'

const ProfileArtist = (props) => {
    return (
        <div class="column">
            {/* TODO Need to add Onclick to jump to the actual Artist */} 
            <img src={props.artist.image} style={{width: "100%", height: "70%"}}></img>
            <p>{props.artist.name}</p>
        </div>
    )
}

export default ProfileArtist;