<<<<<<< HEAD
import React, { useState } from 'react'


const ProfileSong = (props) => {
    return (
        <div class="column">
            <a>{props.url}</a>
            <img src={props.image} style={{width: "100%", height: "70%"}}></img>
            <p>{props.name}</p>
        </div>
    );
=======
import React from "react";
import '../profile_src/profile.css'

const ProfileSong = (props) => {
    return (
    <div class="grid-container">
        <div class="grid-item"><img style={{width: "70%", height: "100%"}} src={props.image}></img></div>
        <div class="grid-item">{props.name}</div>
        <div class="grid-item">{props.artist}</div>
        <div class="grid-item">{props.album}</div>
    </div>
    )
>>>>>>> kims171/profile
}

export default ProfileSong;