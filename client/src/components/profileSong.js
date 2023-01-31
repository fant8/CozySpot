import React from "react";
import '../profile_src/profile.css'

const ProfileArtist = (props) => {
    return (
        <div>
            {/* TODO Need to add artist and album of the song */} 
            <p>{props.name}</p>
        </div>
    )
}

export default ProfileArtist;