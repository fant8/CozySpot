import React from "react";
import '../profile_src/profile.css'

const ProfileSong = (props) => {
    return (
    <div class="grid-container">
        <div class="grid-item"><img style={{width: "70%", height: "100%"}} src={props.song.image}></img></div>
        <div class="grid-item">{props.song.name}</div>
        <div class="grid-item">{props.song.artist}</div>
        <div class="grid-item">{props.song.album}</div>
    </div>
    )
}

export default ProfileSong;