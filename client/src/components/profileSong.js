import React, { useState } from 'react'


const ProfileSong = (props) => {
    return (
        <div class="column">
            <a>{props.url}</a>
            <img src={props.image} style={{width: "100%", height: "70%"}}></img>
            <p>{props.name}</p>
        </div>
    );
}

export default ProfileSong;